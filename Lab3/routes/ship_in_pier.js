'use strict'

const express = require('express')
const router = express.Router()

const shipInPierController = require('./../controllers/ship_in_pier')

router.get('/', shipInPierController.index)
router.get('/list', shipInPierController.shipInPierList)
router.get('/add', shipInPierController.createShipInPierForm)
router.post('/add', shipInPierController.postCreateShipInPier)
router.get('/edit/:id', shipInPierController.updateShipInPierForm)
router.post('/edit/:id', shipInPierController.putUpdateShipInPier)
router.get('/remove/:id', shipInPierController.deleteShipInPierFrom)
router.post('/remove/:id', shipInPierController.deleteShipInPier)

module.exports = router
