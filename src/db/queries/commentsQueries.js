const connect = require('../db_connections.js');

const getCommentsQuerie = cb => {
  connect.query(
    `(SELECT *
      FROM posts
      LEFT JOIN comments
      ON posts.id = comments.postID)`,
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    }
  );
};

module.exports = { getCommentsQuerie };
