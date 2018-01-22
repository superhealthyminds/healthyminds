const connect = require('../db_connections.js');

const getAllTagsQuery = cb => {
  connect.query(
    `
  SELECT * 
  FROM tags`,
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    }
  );
};

const addTagQuery = ({ tagName, diseaseId }, cb) => {
  connect.query(
    `
  INSERT INTO
  tags
    (tagName, diseaseId)
    VALUES
     ($1, $2)`,
    [tagName, diseaseId],
    err => {
      if (err) {
        cb(err);
      } else {
        // successful insert does not give result -> if error is empty it is success
        cb(null, JSON.stringify({ success: 'the tag was added' }));
      }
    }
  );
};

module.exports = { getAllTagsQuery, addTagQuery };
