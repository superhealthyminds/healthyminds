const router = require('express').Router();
const getHomePagePosts = require('./getHomePosts');
const getChatRoomMessages = require('./getChatRoomMessages');
const getAllDiseases = require('./getAllDiseases');

router.get('/homePagePosts', getHomePagePosts);
router.get('/Diseases', getAllDiseases);
router.get('/chatRoomMessages', getChatRoomMessages);

module.exports = router;
