const fs = require('fs');
const connect = require('./db_connections');
// eslint-disable-next-line quotes
const buildScript = fs.readFileSync(`${__dirname}/db_build.sql`, `utf8`);

connect.query(buildScript, (err, res) => {
  if (err) {
    throw err;
  }
  connect.end();
});
