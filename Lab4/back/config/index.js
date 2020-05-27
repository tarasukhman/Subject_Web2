'use strict'

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv')
  dotenv.config()
}

const env = process.env

module.exports = {
  host: env.HOST || 8080,
  port: env.PORT || 'localhost',
  dbschema: env.DBSCHEMA,
  dbport: 27017,
  dbuser: 'tarasukhman',
  dbpwd: '11025320',
  dbhost: env.DBHOST,
  dbname: 'myDb'
}
