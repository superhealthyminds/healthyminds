const router = require('express').Router();
const getHomePagePosts = require('./getHomePosts');
const getAllTags = require('./getAllTags');
const getAllDiseases = require('./getAllDiseases');

router.get('/homePagePosts', getHomePagePosts);
router.get('/getAllTags', getAllTags);
router.get('/Diseases', getAllDiseases);

module.exports = router;
