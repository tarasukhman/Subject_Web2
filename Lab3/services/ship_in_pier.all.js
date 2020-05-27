const ShipInPier = require('../models/ship_in_pier')

/**
 * @param {Object} data
 */
module.exports = function () {
  return new Promise((resolve, reject) => {
    ShipInPier.find({}, function (err, shipInPier) {
      if (err) {
        reject(err)
      } else {
        resolve(shipInPier)
      }
    })
  })
}
