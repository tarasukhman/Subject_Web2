const mongoose = require('mongoose')

const Schema = mongoose.Schema

const shipInPierSchema = new Schema({
  code: { type: String, required: true, unique: true, max: 6 },
  name: { type: String, required: true, unique: true, max: 50 }
})

module.exports = mongoose.model('ShipInPier', shipInPierSchema)
