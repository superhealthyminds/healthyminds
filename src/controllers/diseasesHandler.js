const { getAllDiseasesQuerie } = require('../db/queries/diseasesQueries');

const getAllDiseases = (req, res) => {
  getAllDiseasesQuerie((err, Diseases) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err); // TODO: Error handling
    } else {
      res.json({ Diseases });
    }
  });
};

module.exports = { getAllDiseases };
