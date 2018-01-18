const router = require('express').Router();
const getHomePagePosts = require('./getHomePosts');
const getDiseases = require('./getDiseases')

router.get('/homePagePosts', getHomePagePosts);
router.get('/Diseases', getDiseases)

module.exports = router;
