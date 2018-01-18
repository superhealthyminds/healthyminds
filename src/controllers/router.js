const router = require('express').Router();
const getHomePagePosts = require('./getHomePosts');
const getAllTags = require('./getAllTags');

router.get('/homePagePosts', getHomePagePosts);
router.get('/getAllTags', getAllTags);
module.exports = router;
