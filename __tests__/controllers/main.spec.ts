import { app } from '../../src/app';

const request = require('supertest');
const mongoose = require('mongoose');

const agent = request.agent(app.listen());

describe('Main', () => {
  // beforeAll(() => {
  //   mongoose.connection.on('open');
  // });
  describe('GET /', () => {
    it('should result in name response', () => {
      return agent.get('/').expect(200, '{"app":"QS API"}');
    });
  });
});
