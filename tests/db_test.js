const db_test = () => {
  const test = require('tape');

  const runDbBuild = require('../src/db/db_buildTest');
  const { getHomePagePostsQuery } = require('../src/db/querys/postQuery');

  test('testing post request', t => {
    const expected = [
      {
        id: 1,
        type: 'story',
        title: 'My epic party',
        content: 'Hey, all invited',
        time_stamp: new Date('20017-12-16 06:00:00'),
        tagids: 1
      }
    ];
    runDbBuild(() => {
      getHomePagePostsQuery((err, res) => {
        t.deepEqual(res, expected, 'Returns success message');
        t.end();
      });
    });
  });

  test.onFinish(() => {
    process.exit(0);
  });
};

module.exports = db_test;
