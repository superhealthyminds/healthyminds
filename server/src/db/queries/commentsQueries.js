const connect = require('../db_connections.js');

const getComments = cb => {
  connect.query(
    `(SELECT *
      FROM posts
      LEFT JOIN comments
      ON posts.id = comments.postID)`,
    (err, res) => {
      cb(err, res.rows);
    }
  );
};

module.exports = { getComments };
