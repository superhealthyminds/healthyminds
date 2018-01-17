const connect = require('../db_connections.js');

const getChatRoomsPosts = (cb) => {
  connect.query(
    `SELECT * FROM chatRooms INNER JOIN messages ON (chatrooms.id = messages.chatRoomId) order by time_stamp Asc LIMIT 10`,
  (err, res) => {
    cb(err, res.rows);
    }
  );
};

module.exports = {getChatRoomsPosts};
