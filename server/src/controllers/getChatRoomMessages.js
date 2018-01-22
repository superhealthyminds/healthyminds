const chatRoomMessagesQueries = require('../db/queries/chatRoomMessagesQueries');

module.exports = (req, res) => {
  chatRoomMessagesQueries.getChatRoomMessages((err, chatRoomsMessages) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err); // TODO: Error handling
    } else {
      res.json({ chatRoomsMessages });
    }
  });
};
