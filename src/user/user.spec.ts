import { app } from '../../src/app';

const request = require('supertest');
const mongoose = require('mongoose');

const agent = request.agent(app.listen());

describe('User', () => {
  // beforeAll(() => {
  //   mongoose.connection.on('open');
  // });
  describe('GET /users', () => {
    it('should result in 200 status', () => {
      return agent.get('/users').expect(200);
    });
  });
});
