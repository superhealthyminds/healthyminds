const { getHomePagePostsQuery } = require('../../db/querys/postQuery');
const { getCommentsQuery } = require('../../db/querys/commentsQuery');

const handlebarHomepage = (req, res, next) => {
  getHomePagePostsQuery((err, homePagePosts) => {
    if (err) {
      return next(err);
    } else {
      getCommentsQuery((err, postComments) => {
        if (err) {
          return next(err);
        } else {
          res.render('homepage', {
            activePage: { homepage: true },
            homepageData: {
              postComments: postComments,
              homePagePosts: homePagePosts
            }
          });
        }
      });
    }
  });
};

module.exports = { handlebarHomepage };
