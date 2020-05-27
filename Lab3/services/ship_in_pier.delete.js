const ShipInPier = require('../models/ship_in_pier')

/**
 * @param {Object} data
 */
module.exports = function (data) {
  return new Promise((resolve, reject) => {
    ShipInPier.findByIdAndDelete(data.id, function (err, deletedShipInPier) {
      if (err) {
        reject(err)
      } else {
        resolve(deletedShipInPier)
      }
    })
  })
}
