const { getAllDiseasesQuery } = require('../db/Querys/diseasesQuery');

const getAllDiseases = (req, res, next) => {
  getAllDiseasesQuery((err, Diseases) => {
    if (err) {
      // eslint-disable-next-line no-console
      return next(err);
    } else {
      res.json({ Diseases });
    }
  });
};

module.exports = { getAllDiseases };
