const connect = require('../db_connections.js');

const getAllTagsQuerry = cb => {
  connect.query(
    `
  SELECT * 
  FROM tags`,
    (err, res) => {
      cb(err, res.rows);
    }
  );
};

const addTagQuerry = ({ tagName, diseaseId }, cb) => {
  connect.query(
    `
  INSERT INTO
  tags
    (tagName, diseaseId)
    VALUES
     ($1, $2)`,
    [tagName, diseaseId],
    err => {
      // successful insert does not give result -> if error is empty it is success
      cb(err, JSON.stringify({ success: 'the tag was added' }));
    }
  );
};

module.exports = { getAllTagsQuerry, addTagQuerry };
