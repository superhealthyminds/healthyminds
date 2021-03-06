const connect = require('../db_connections.js');

const getChatRoomMessages = cb => {
  connect.query(
    `SELECT *
    FROM messages
     INNER JOIN chatRooms ON
     (messages.chatRoomId = chatRooms.id)
     order by time_stamp`,

    (err, res) => {
      cb(err, res.rows);
    }
  );
};

module.exports = { getChatRoomMessages };
