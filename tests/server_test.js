const test = require('tape');
const request = require('supertest');

const app = require('../src/app');

test('Testing empty root get request - / ', t => {
  request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      console.log(res.text);
      t.ok(res.text);
      t.end();
    });
});

test('Testing empty root get request - / ', t => {
  const expectedThings = [
    {
      id: 1,
      type: 'story',
      title: 'My epic party',
      content: 'Hey, all invited',
      commentsid: 1,
      time_stamp: new Date('20017-12-16 06:00:00'),
      tagids: 1
    }
  ];
  request(app)
    .get('/posts/homePagePosts')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.ok(res.text);
      let actualThings = res.body;
      actualThings[0].time_stamp = new Date(actualThings[0].time_stamp);
      t.same(actualThings, expectedThings, 'should get the only post');
      t.end();
    });
});

test.onFinish(() => {
  process.exit(0);
});
