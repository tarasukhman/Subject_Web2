const ShipInPier = require('../models/ship_in_pier')

/**
 * @param {Object} data
 */
module.exports = function (data) {
  const shipInPier = new ShipInPier({
    name: data.name,
    code: data.code
  })

  return new Promise((resolve, reject) => {
    shipInPier.save(function (err, createdShipInPier) {
      if (err) {
        reject(err)
      } else {
        resolve(createdShipInPier)
      }
    })
  })
}
