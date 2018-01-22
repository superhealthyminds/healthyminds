const { getHomePagePostsQuery } = require('../db/querys/postQuery');
const { getCommentsQuery } = require('../db/querys/commentsQuery');

const getHomePagePosts = (req, res, next) => {
  getHomePagePostsQuery((err, homePagePosts) => {
    if (err) {
      return next(err);
    } else {
      getCommentsQuery((err, postComments) => {
        if (err) {
          return next(err);
        } else {
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          res.json({ postComments, homePagePosts });
        }
      });
    }
  });
};

module.exports = { getHomePagePosts };
