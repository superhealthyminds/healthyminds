const connect = require('../db_connections.js');

const getAllDiseasesQuerie = cb => {
  connect.query('(SELECT * FROM diseases)', (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = { getAllDiseasesQuerie };
