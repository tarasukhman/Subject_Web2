const Pier = require('../models/pier_')

/**
 * @param {Object} data
 */
module.exports = function (data) {
  const pier = new Pier({
    name: data.name,
    code: data.code
  })

  return new Promise((resolve, reject) => {
    pier.save(function (err, createdPier) {
      if (err) {
        reject(err)
      } else {
        resolve(createdPier)
      }
    })
  })
}
