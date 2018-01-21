const router = require('express').Router();
const getHomePagePosts = require('./getHomePosts');
const getAllTags = require('./getAllTags');
const getChatRoomMessages = require('./getChatRoomMessages');
const getAllDiseases = require('./getAllDiseases');

router.get('/homePagePosts', getHomePagePosts);
router.get('/getAllTags', getAllTags);
router.get('/Diseases', getAllDiseases);
router.get('/chatRoomMessages', getChatRoomMessages);

module.exports = router;
