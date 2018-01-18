const router = require('express').Router();
const getHomePagePosts = require('./getHomePosts');
const getAllDiseases = require('./getAllDiseases');

router.get('/homePagePosts', getHomePagePosts);
router.get('/Diseases', getAllDiseases);

module.exports = router;
