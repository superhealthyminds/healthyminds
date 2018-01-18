const connect = require('../db_connections.js');

const getComments = cb => {
  connect.query(
    // eslint-disable-next-line quotes
    `(SELECT * FROM posts LEFT JOIN comments ON posts.id = comments.postID)`,
    (err, res) => {
      cb(err, res.rows);
    }
  );
};

module.exports = { getComments };
