const connect = require('../db_connections.js');

const getCommentsQuery = cb => {
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

const getCommentsByIdQuery = (postId, cb) => {
  connect.query(
    `SELECT *
     FROM comments
     where postId=$1`,
    [postId],
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    }
  );
};

module.exports = { getCommentsQuery, getCommentsByIdQuery };
