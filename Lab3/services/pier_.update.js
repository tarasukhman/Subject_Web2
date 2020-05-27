const Pier = require('../models/pier_')

/**
 * @param {Object} data
 */
module.exports = function (data) {
  const pierData = {
    name: data.name,
    code: data.code
  }

  return new Promise((resolve, reject) => {
    Pier.findByIdAndUpdate(
      data.id,
      { $set: pierData },
      { new: true },
      function (err, updatedShipInPier) {
        if (err) {
          reject(err)
        } else {
          resolve(updatedPier)
        }
      })
  })
}
