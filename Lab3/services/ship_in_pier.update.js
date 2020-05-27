const ShipInPier = require('../models/ship_in_pier')

/**
 * @param {Object} data
 */
module.exports = function (data) {
  const shipInPierData = {
    name: data.name,
    code: data.code
  }

  return new Promise((resolve, reject) => {
    ShipInPier.findByIdAndUpdate(
      data.id,
      { $set: shipInPierData },
      { new: true },
      function (err, updatedShipInPier) {
        if (err) {
          reject(err)
        } else {
          resolve(updatedShipInPier)
        }
      })
  })
}
