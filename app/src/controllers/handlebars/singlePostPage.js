const { getPostById } = require('../../db/querys/postQuery');
const { getCommentsByIdQuery } = require('../../db/querys/commentsQuery');
const singlePostPage = (req, res, next) => {
  getPostById(req.query.id, (err, post) => {
    if (err) {
      return next(err);
    } else {
      getCommentsByIdQuery(post[0].id, (err, commnets) => {
        res.render('singlePostPage', {
          activePage: { singlePostPage: true },
          singlePostPage: {
            post: post[0],
            commnets: commnets
          }
        });
      });
    }
  });
};

module.exports = { singlePostPage };
