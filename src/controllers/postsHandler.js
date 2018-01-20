const { getHomePagePostsQuerie } = require('../db/queries/postQueries');
const { getCommentsQuerie } = require('../db/queries/commentsQueries');

const getHomePagePosts = (req, res, next) => {
  getHomePagePostsQuerie((err, homePagePosts) => {
    if (err) {
      return next(err);
    } else {
      getCommentsQuerie((err, postComments) => {
        if (err) {
          return next(err);
        } else {
          res.json({ postComments, homePagePosts });
        }
      });
    }
  });
};

module.exports = { getHomePagePosts };
