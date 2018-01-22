const { getAllDiseasesQuery } = require('../db/querys/diseasesQuery');

const getAllDiseases = (req, res, next) => {
  getAllDiseasesQuery((err, Diseases) => {
    if (err) {
      // eslint-disable-next-line no-console
      return next(err);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      res.json({ Diseases });
    }
  });
};

module.exports = { getAllDiseases };
