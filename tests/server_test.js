const test = require('tape');
const request = require('supertest');

const app = require('../src/app');

test('Testing empty root get request - / ', t => {
  request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => { // eslint-disable-line no-unused-vars

      t.end();
      process.exit(0);
    });
});
