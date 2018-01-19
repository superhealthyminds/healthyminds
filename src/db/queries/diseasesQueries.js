const connect = require('../db_connections.js');

const getAllDiseasesQuerie = cb => {
  connect.query(
    '(SELECT * FROM diseases)',
    (err, res) => {
      cb(err, res.rows);
    }
  );
};

module.exports = { getAllDiseasesQuerie };
