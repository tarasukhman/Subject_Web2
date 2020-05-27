const Product = require('../models/product')

/**
 * @param {Object} data
 */
module.exports = function (data) {
  const product = new Product({
    address: data.address,
    type: data.type_id
  })

  return new Promise((resolve, reject) => {
    product.save(function (err, createdProduct) {
      if (err) {
        reject(err)
      } else {
        resolve(createdProduct)
      }
    })
  })
}
