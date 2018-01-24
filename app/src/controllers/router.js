const router = require('express').Router();
const { getHomePagePosts } = require('./postsHandler');
const { getAllTags, addTag } = require('./tagsHandler');
const { getAllDiseases } = require('./diseasesHandler');
const { handlebarHomepage } = require('./handlebars/homepage');
router
  .route('/tags')
  .get(getAllTags)
  .post(addTag);

router.route('/diseases').get(getAllDiseases);

router.route('/homePagePosts').get(getHomePagePosts);

router.route('/homepage').get(handlebarHomepage);

// router.route('/singlePost').get()

module.exports = router;
