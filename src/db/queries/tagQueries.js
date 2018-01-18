const connect = require('../db_connections.js');

const getAllTags = cb => {
  connect.query(`SELECT * FROM tags`, (err, res) => {
    cb(err, res.rows);
  });
};

module.exports = { getAllTags };
