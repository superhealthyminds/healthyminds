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

test('Testing the root /homePagePosts  ', t => {
  const expectedThings = [
    {
      id: 1,
      type: 'story',
      title: 'My epic party',
      content: 'Hey, all invited',
      time_stamp: new Date('20017-12-16 06:00:00'),
      tagids: 1
    }
  ];
  request(app)
    .get('/homePagePosts')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.ok(res.text);
      let actualThings = res.body.homePagePosts;
      console.log(actualThings);
      actualThings[0].time_stamp = new Date(actualThings[0].time_stamp);
      t.same(actualThings, expectedThings, 'should get the only post');
      t.end();
    });
});

test('Testing the root /getAllTags  ', t => {
  const expectedThings = [
    {
      id: 1,
      tagname: 'cancer',
      diseaseid: 1
    }
  ];
  request(app)
    .get('/getAllTags')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.ok(res.text);
      let actualThings = res.body;
      t.same(actualThings, expectedThings, 'should get the only post');
      t.end();
    });
});

test.onFinish(() => {
  process.exit(0);
});
