const { getAllTagsQuerry, addTagQuerry } = require('../db/queries/tagQueries');

const getAllTags = (req, res, next) => {
  getAllTagsQuerry((err, allTags) => {
    if (err) {
      // eslint-disable-next-line no-console
      return next(err);
    } else {
      res.json(allTags);
    }
  });
};

const addTag = (req, res, next) => {
  addTagQuerry(req.body, (err, isSuccessful) => {
    if (err) {
      // eslint-disable-next-line no-console
      return next(err);
    } else {
      res.json(isSuccessful);
    }
  });
};

module.exports = { getAllTags, addTag };
