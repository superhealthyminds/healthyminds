const router = require('express').Router();
const getHomePagePosts = require('./getHomePosts');
const getChatRoomMessages = require('./getChatRoomMessages');


router.get('/homePagePosts', getHomePagePosts);
router.get('/chatRoomMessages', getChatRoomMessages);

module.exports = router;
