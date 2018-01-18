const fs = require('fs');
const connect = require('./db_connections');
const buildScript = fs.readFileSync(`${__dirname}/db_build.sql`, `utf8`);

const runDbBuild = cb => {
  connect.query(buildScript, (err, res) => {
    if (err) {
      return cb(err);
    }
    cb(null, res);
  });
};

module.exports = runDbBuild;
