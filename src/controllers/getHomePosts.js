const express = require('express');
const postQueries = require('../db/queries/postQueries');
const commentsQueries = require('../db/queries/commentsQueries');

module.exports = (req, res) => {
  postQueries.getHomePagePosts((err, homePagePosts) => {
    if (err) {
      console.log(err);
      res.send('error');
    } else {
      commentsQueries.getComments((err, postComments) => {
        if (err) {
          console.log(err);
          res.send('error');
        } else {
          res.json({ postComments, homePagePosts });
        }
      });
    }
  });
};