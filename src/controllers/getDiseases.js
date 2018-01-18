const diseasesQueries = require('../db/queries/diseasesQueries');

module.exports = (req, res) => {
  diseasesQueries.getDiseases((err, Diseases) => {
    if (err) {
      throw err;
      res.send('Error');
    } else {
      res.json({ Diseases });
    }
  });
};
