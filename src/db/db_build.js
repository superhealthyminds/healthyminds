const fs = require('fs');
const connect = require('./db_connections');
const buildScript = fs.readFileSync(`${__dirname}/db_build.sql`, 'utf8');
connect.query(buildScript, err => {
  // TODO: Error handling
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err); // TODO: Error handling
  }
  connect.end();
});
