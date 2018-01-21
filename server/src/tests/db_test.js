const tape = require('tape');

const runDbBuild = require('../src/db/db_buildTest');
const postQueries = require('../src/db/queries/postQueries');

tape('tape is working', t => {
  t.equal(1, 1, 'One equals one');
  t.end();
});

tape('testing post request', t => {
  const expected = [{
    id: 1,
    type: 'story',
    title: 'My epic party',
    content: 'Hey, all invited',
    commentsid: 1,
    time_stamp: new Date('20017-12-16 06:00:00'),
    tagids: 1
  }];
  runDbBuild(() => {
    postQueries.getHomePagePosts((err, res) => {
      t.deepEqual(res, expected, 'Returns success message');
      t.end();
    });
  });
});