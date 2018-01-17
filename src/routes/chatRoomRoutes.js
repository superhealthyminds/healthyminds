
const express = require('express');
const chatRoomsQueries = require('../db/queries/chatRoomsQueries');

const routes = () => {
  const chatRoomRoutes = express.Router();
  chatRoomRoutes.route('/chatRoomsPublic').get((req, res) => {
    chatRoomsQueries.getChatRoomsPosts((err, chatRoomsPublic) => {
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
