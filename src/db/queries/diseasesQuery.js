const connect = require('../db_connections.js');

const getAllDiseasesQuery = cb => {
  connect.query('(SELECT * FROM diseases)', (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = { getAllDiseasesQuery };
