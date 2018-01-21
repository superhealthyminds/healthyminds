const connect = require('../db_connections.js');

const getAllDiseases = cb => {
  connect.query(
    '(SELECT * FROM diseases)',
    (err, res) => {
      cb(err, res.rows);
    }
  );
};

module.exports = { getAllDiseases };
