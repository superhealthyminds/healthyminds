const test = require('tape');
const request = require('supertest');

const app = require('../src/app');

test('tape is working', t => {
  t.equal(1, 1, 'one equals one');
  t.end();
});

test('Testing empty root get request - / ', t => {
  request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
        console.log('in end');
        console.log(res.text)
      t.end();
      process.exit(0);
    });
});
