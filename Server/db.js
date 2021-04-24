const { Pool } = require('pg')

exports.pool = new Pool ({
  user: 'MassimoBergamin',
  host: 'localhost',
  database: 'CreativesCorner',
  port: 5432
});