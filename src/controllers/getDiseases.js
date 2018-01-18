const diseasesQueries = require('../db/queries/diseasesQueries');

module.exports = (req, res) => {
  diseasesQueries.getDiseases((err, Diseases) => {
    if (err) {
      throw err;
    } else {
      res.json({ Diseases });
    }
  });
};
