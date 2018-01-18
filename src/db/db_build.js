const fs = require('fs');
const connect = require('./db_connections');
const buildScript = fs.readFileSync(`${__dirname}/db_build.sql`, 'utf8');
// eslint-disable-next-line no-unused-vars
connect.query(buildScript, (err, res) => { // TODO: Error handling
  if (err) {
    throw err;
  }
  connect.end();
});
