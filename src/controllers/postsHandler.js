const { getHomePagePostsQuery } = require('../db/Querys/postQuerys');
const { getCommentsQuery } = require('../db/Querys/commentsQuerys');

const getHomePagePosts = (req, res, next) => {
  getHomePagePostsQuery((err, homePagePosts) => {
    if (err) {
      return next(err);
    } else {
      getCommentsQuery((err, postComments) => {
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
