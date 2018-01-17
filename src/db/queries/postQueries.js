const connect = require('../db_connections.js');

const getHomePagePosts = (cb) => {
  connect.query(
    `(SELECT * FROM posts WHERE type = 'story' order by time_stamp desc LIMIT 2)
      UNION ALL
      (SELECT * FROM posts WHERE type = 'advise' order by time_stamp desc LIMIT 2)
      UNION ALL
      (SELECT * FROM posts WHERE type = 'question' order by time_stamp desc LIMIT 2)`,
    (err, res) => {
      cb(err, res.rows);
    }
  );
};


module.exports = {getHomePagePosts};
