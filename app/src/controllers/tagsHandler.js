const { getAllTagsQuery, addTagQuery } = require('../db/querys/tagQuery');

const getAllTags = (req, res, next) => {
  getAllTagsQuery((err, allTags) => {
    if (err) {
      // eslint-disable-next-line no-console
      return next(err);
    } else {
      res.json(allTags);
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
    }
  });
};

const addTag = (req, res, next) => {
  addTagQuery(req.body, (err, isSuccessful) => {
    if (err) {
      // eslint-disable-next-line no-console
      return next(err);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      res.json(isSuccessful);
    }
  });
};

module.exports = { getAllTags, addTag };
