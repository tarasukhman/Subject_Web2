const Pier = require('../models/pier_')

/**
 * @param {Object} data
 */
module.exports = function () {
  return new Promise((resolve, reject) => {
    Pier.find({}, function (err, pier) {
      if (err) {
        reject(err)
      } else {
        resolve(pier)
      }
    })
  })
}
