'use strict'

const { body, validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter')
const pierAllService = require('../services/pier_.all')
const pierCreateService = require('../services/pier_.create')
const pierByIdService = require('../services/pier_.byId')
const pierUpdateService = require('../services/pier_.update')
const pierDeleteService = require('../services/pier_.delete')

module.exports = {
  index (req, res) {
    res.render('pages/pier_/index')
  },
  pierList (req, res) {
    pierAllService()
      .then(pierList => {
        res.render('pages/pier_/list', {
          pier: pierList
        })
      })
      .catch(error => {
        res.render('pages/pier_/list', {
          pier: [],
          errors: [{ msg: error.message }]
        })
      })
  },
  createPierForm (req, res) {
    res.render('pages/pier_/add')
  },
  postCreatePier: [
    body('name')
      .isLength({ min: 1 }).trim().withMessage('Name field must be specified.'),
    body('code')
      .isLength({ min: 1 }).trim().withMessage('Code field must be specified.'),
    sanitizeBody('name').escape(),
    sanitizeBody('code').escape(),
    (req, res) => {
      const pierData = req.body
      const errors = validationResult(req)

      if (errors.isEmpty()) {
        pierCreateService(req.body)
          .then(pierData => {
            req.flash('info', `Ship In Pier "${pierData.name}" is Added`)
            res.redirect('/pier-/list')
          })
          .catch(error => {
            res.render('pages/pier_/add', {
              newPier: pierData,
              errors: [{ msg: error.message }]
            })
          })
      } else {
        res.render('pages/pier_/add', {
          newPier: pierData,
          errors: errors.array()
        })
      }
    }
  ],
  updatePierForm (req, res, next) {
    pierByIdService(req.params.id)
      .then(pier => {
        if (pier) {
          res.render('pages/pier_/update', { pier: pier })
        } else {
          const errorNotFound = new Error('Not found')
          errorNotFound.status = 404
          next(errorNotFound)
        }
      })
      .catch(error => {
        const errorServer = new Error(`Internal server error: ${error.message}`)
        errorServer.status = 500
        next(errorServer)
      })
  },
  putUpdatePier: [
    body('name')
      .isLength({ min: 1 }).trim().withMessage('Name field must be specified.'),
    body('code')
      .isLength({ min: 1 }).trim().withMessage('Code field must be specified.'),
    sanitizeBody('name').escape(),
    sanitizeBody('code').escape(),
    (req, res, next) => {
      const pierData = req.body

      const errors = validationResult(req)
      if (errors.isEmpty()) {
        pierUpdateService(pierData)
          .then(pier => {
            req.flash('info', `Pier "#${pier.id} ${pier.name}" is Updated`)
            res.redirect('/pier-/list')
          })
          .catch(error => {
            res.render('pages/pier_/update', {
              pier: {},
              newPier: pierData,
              errors: [{ msg: error.message }]
            })
          })
      } else {
        res.render('pages/pier_/update', {
          pier: {},
          newPier: pierData,
          errors: errors.array()
        })
      }
    }
  ],
  deletePierFrom (req, res, next) {
    pierByIdService(req.params.id)
      .then(pier => {
        if (pier) {
          res.render('pages/pier_/delete', { pier: pier })
        } else {
          const errorNotFound = new Error('Not found')
          errorNotFound.status = 404
          next(errorNotFound)
        }
      })
      .catch(error => {
        const errorServer = new Error(`Internal server error: ${error.message}`)
        errorServer.status = 500
        next(errorServer)
      })
  },
  deletePier (req, res, next) {
    pierDeleteService(req.body)
      .then(pier => {
        req.flash('info', `Pier "#${pier.id} ${pier.name}" is Deleted`)
        res.redirect('/pier-/list')
      })
      .catch(error => {
        res.render('pages/pier_/delete', {
          pier: req.body,
          errors: [{ msg: error.message }]
        })
      })
  }
}
