const diseasesQueries = require('../db/queries/diseasesQueries');

module.exports = (req, res) => {
  diseasesQueries.getAllDiseases((err, Diseases) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err); // TODO: Error handling
    } else {
      res.json({ Diseases });
    }
  });
};
