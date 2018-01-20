const { getAllDiseasesQuerie } = require('../db/queries/diseasesQueries');

const getAllDiseases = (req, res, next) => {
  getAllDiseasesQuerie((err, Diseases) => {
    if (err) {
      // eslint-disable-next-line no-console
      return next(err);
    } else {
      res.json({ Diseases });
    }
  });
};

module.exports = { getAllDiseases };
