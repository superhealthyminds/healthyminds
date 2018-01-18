const diseasesQueries = require('../db/queries/diseasesQueries');

module.exports = (req, res) => {
  diseasesQueries.getAllDiseases((err, Diseases) => {
    if (err) {
      throw err;
    } else {
      res.json({ Diseases });
    }
  });
};
