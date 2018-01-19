const { getHomePagePostsQuerie } = require('../db/queries/postQueries');
const { getCommentsQuerie } = require('../db/queries/commentsQueries');

const getHomePagePosts = (req, res) => {
  getHomePagePostsQuerie((err, homePagePosts) => {
    if (err) {
      res.send('error');
    } else {
      getCommentsQuerie((err, postComments) => {
        if (err) {
          res.send('error');
        } else {
          res.json({ postComments, homePagePosts });
        }
      });
    }
  });
};

module.exports = { getHomePagePosts };
