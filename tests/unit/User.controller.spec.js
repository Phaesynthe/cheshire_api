/* global describe, it, reuire */

const expect = require('expect');
const supertest = require('supertest');

let request = supertest('http://localhost:24601');

describe('Controller >> User:', () => {

  it('responds to requests', done => {
    request.get('/user')
    .end((err, response) => {
      expect(response.status).toBe(200);
      done();
    });
  });

  it('responds to requests', done => {
    request.get('/user')
    .end((err, response) => {
      expect(response.status).toBe(200);
      done();
    });
  });

});
