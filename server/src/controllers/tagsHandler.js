const { getAllTagsQuery, addTagQuery } = require('../db/querys/tagQuery');

const getAllTags = (req, res, next) => {
  getAllTagsQuery((err, allTags) => {
    if (err) {
      // eslint-disable-next-line no-console
      return next(err);
    } else {
      res.json(allTags);
    }
  });
};

const addTag = (req, res, next) => {
  addTagQuery(req.body, (err, isSuccessful) => {
    if (err) {
      // eslint-disable-next-line no-console
      return next(err);
    } else {
      res.json(isSuccessful);
    }
  });
};

module.exports = { getAllTags, addTag };
