'use strict'

const { body, validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter')
const shipInPierAllService = require('./../services/ship_in_pier.all')
const shipInPierCreateService = require('../services/ship_in_pier.create')
const shipInPierByIdService = require('../services/ship_in_pier.byId')
const shipInPierUpdateService = require('../services/ship_in_pier.update')
const shipInPierDeleteService = require('../services/ship_in_pier.delete')

module.exports = {
  index (req, res) {
    res.render('pages/ship_in_pier/index')
  },
  shipInPierList (req, res) {
    shipInPierAllService()
      .then(shipInPierList => {
        res.render('pages/ship_in_pier/list', {
          shipInPier: shipInPierList
        })
      })
      .catch(error => {
        res.render('pages/ship_in_pier/list', {
          shipInPier: [],
          errors: [{ msg: error.message }]
        })
      })
  },
  createShipInPierForm (req, res) {
    res.render('pages/ship_in_pier/add')
  },
  postCreateShipInPier: [
    body('name')
      .isLength({ min: 1 }).trim().withMessage('Name field must be specified.'),
    body('code')
      .isLength({ min: 1 }).trim().withMessage('Code field must be specified.'),
    sanitizeBody('name').escape(),
    sanitizeBody('code').escape(),
    (req, res) => {
      const shipInPierData = req.body
      const errors = validationResult(req)

      if (errors.isEmpty()) {
        shipInPierCreateService(req.body)
          .then(shipInPierData => {
            req.flash('info', `Ship In Pier "${shipInPierData.name}" is Added`)
            res.redirect('/ship-in-pier/list')
          })
          .catch(error => {
            res.render('pages/ship_in_pier/add', {
              newShipInPier: shipInPierData,
              errors: [{ msg: error.message }]
            })
          })
      } else {
        res.render('pages/ship_in_pier/add', {
          newShipInPier: shipInPierData,
          errors: errors.array()
        })
      }
    }
  ],
  updateShipInPierForm (req, res, next) {
    shipInPierByIdService(req.params.id)
      .then(shipInPier => {
        if (shipInPier) {
          res.render('pages/ship_in_pier/update', { shipInPier: shipInPier })
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
  putUpdateShipInPier: [
    body('name')
      .isLength({ min: 1 }).trim().withMessage('Name field must be specified.'),
    body('code')
      .isLength({ min: 1 }).trim().withMessage('Code field must be specified.'),
    sanitizeBody('name').escape(),
    sanitizeBody('code').escape(),
    (req, res, next) => {
      const shipInPierData = req.body

      const errors = validationResult(req)
      if (errors.isEmpty()) {
        shipInPierUpdateService(shipInPierData)
          .then(shipInPier => {
            req.flash('info', `Ship In Pier "#${shipInPier.id} ${shipInPier.name}" is Updated`)
            res.redirect('/ship-in-pier/list')
          })
          .catch(error => {
            res.render('pages/ship_in_pier/update', {
              shipInPier: {},
              newShipInPier: shipInPierData,
              errors: [{ msg: error.message }]
            })
          })
      } else {
        res.render('pages/ship_in_pier/update', {
          shipInPier: {},
          newShipInPier: shipInPierData,
          errors: errors.array()
        })
      }
    }
  ],
  deleteShipInPierFrom (req, res, next) {
    shipInPierByIdService(req.params.id)
      .then(shipInPier => {
        if (shipInPier) {
          res.render('pages/ship_in_pier/delete', { shipInPier: shipInPier })
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
  deleteShipInPier (req, res, next) {
    shipInPierDeleteService(req.body)
      .then(shipInPier => {
        req.flash('info', `Ship In Pier "#${shipInPier.id} ${shipInPier.name}" is Deleted`)
        res.redirect('/ship-in-pier/list')
      })
      .catch(error => {
        res.render('pages/ship_in_pier/delete', {
          shipInPier: req.body,
          errors: [{ msg: error.message }]
        })
      })
  }
}
