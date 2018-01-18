const { Pool } = require('pg');
require('env2')('config.env');

// eslint-disable-next-line no-unused-vars
let DB_URL = process.env.DB_URL;
if (process.env.NODE_ENV === 'test') {
  DB_URL = process.env.TEST_DB_URL;
}
if (!process.env.DATABASE_URL)
  throw new Error('Enviroment variable DATABASE_URL must be set');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

module.exports = pool;
