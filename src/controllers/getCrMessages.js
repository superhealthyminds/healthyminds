const crMessagesQueries = require('../db/queries/crMessagesQueries');

module.exports = (req, res) => {
  crMessagesQueries.getCrMessages((err, chatRoomsMessages) => {
    if (err) {
      throw err;
    } else {
      res.json({ chatRoomsMessages });
    }
  });
};
