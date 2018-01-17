const router = require('express').Router();
const getHomePagePosts = require('./getHomePosts');

router.get('/homePagePosts', getHomePagePosts);

module.exports = router;
