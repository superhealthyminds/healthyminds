const chatRoomMessagesQuerys = require('../db/querys/chatRoomMessagesQuery');

module.exports = (req, res) => {
  chatRoomMessagesQuerys.getChatRoomMessages((err, chatRoomsMessages) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err); // TODO: Error handling
    } else {
      res.json({ chatRoomsMessages });
    }
  });
};
