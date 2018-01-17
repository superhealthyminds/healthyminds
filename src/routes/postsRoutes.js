const express = require('express');
const postQueries = require('../db/queries/postQueries');

const routes = () => {
  const postsRoute = express.Router();
  postsRoute.route('/homePagePosts').get((req, res) => {
    postQueries.getHomePagePosts((err, homePagePosts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(homePagePosts);
      }
    });
  });
  return postsRoute;
};

module.exports = routes;
