const crMessagesQueries = require('../db/queries/crMessagesQueries');

module.exports = (req, res) => {
  crMessagesQueries.getCrMessages((err, chatRoomsMessages) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err); // TODO: Error handling
    } else {
      res.json({ chatRoomsMessages });
    }
  });
};
