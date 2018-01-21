const { getAllTagsQuerry, addTagQuerry } = require('../db/queries/tagQueries');

const getAllTags = (req, res) => {
  getAllTagsQuerry((err, allTags) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err); // TODO: Error handeling
      res.send('error');
    } else {
      res.json(allTags);
    }
  });
};

const addTag = (req, res) => {
  addTagQuerry(req.body, (err, isSuccessful) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err); // TODO: Error handeling
      res.send('error');
    } else {
      res.json(isSuccessful);
    }
  });
};

module.exports = { getAllTags, addTag };
