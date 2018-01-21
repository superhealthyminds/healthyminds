const router = require('express').Router();
const { getHomePagePosts } = require('./postsHandler');
const { getAllTags, addTag } = require('./tagsHandler');
const { getAllDiseases } = require('./diseasesHandler');

router
  .route('/tags')
  .get(getAllTags)
  .post(addTag);

router.route('/diseases').get(getAllDiseases);

router.route('/homePagePosts').get(getHomePagePosts);

module.exports = router;
