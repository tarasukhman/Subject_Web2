const ShipInPier = require('../models/ship_in_pier')

/**
 * @param {Object} data
 */
module.exports = function (id) {
  return new Promise((resolve, reject) => {
    ShipInPier.findById(id, function (err, shipInPier) {
      if (err) {
        reject(err)
      } else {
        resolve(shipInPier)
      }
    })
  })
}
