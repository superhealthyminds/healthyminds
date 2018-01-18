const router = require('express').Router();
const getHomePagePosts = require('./getHomePosts');
const chatRoomsMessages = require('./getCrMessages');


router.get('/homePagePosts', getHomePagePosts);
router.get('/chatRoomsMessages', chatRoomsMessages);

module.exports = router;
