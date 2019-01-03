const request = require('supertest');
const app = require('../server/index.js');

describe('tests reviews path', () => {
  test('the api request has json Content-Type', () => request(app)
    .get('/api/home/1/reviews')
    .expect('Content-Type', /json/));
  test('should respond with reviews to a valid path', (done) => {
    request(app).get('/api/home/1/reviews').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('should respond with statusCode 404 to invalid path', (done) => {
    request(app).get('/api/home/1/rev').then((response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});
