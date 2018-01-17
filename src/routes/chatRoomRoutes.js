const express = require('express');
const postQueries = require('../db/queries/postQueries');

const routes = () => {
  const chatRoomRoutes = express.Router();
  chatRoomRoutes.route('/chatRoomsPublic').get((req, res) => {
    postQueries.getChatRoomsPosts((err, chatRoomsPublic) => {
      if (err) {
        console.log(err);
        res.send('error')
      } else {
        res.json(chatRoomsPublic);
      }
    });
  });
  return chatRoomRoutes
  ;
};

module.exports = routes;
