const { getAllTags } = require('../db/queries/tagQueries');

module.exports = (req, res) => {
  getAllTags((err, allTags) => {
    if (err) {
    // eslint-disable-next-line no-console
      console.log(err); // TODO: Error handeling
      res.send('error');
    } else {
      res.json(allTags);
    }
  });
};
