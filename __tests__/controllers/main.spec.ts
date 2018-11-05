import { app } from '../../src/app';

const request = require('supertest');

const agent = request.agent(app.listen());

describe('Main', () => {
  describe('GET /', () => {
    it('should result in name response', () => {
      return agent.get('/').expect(200, 'QS API');
    });
  });
});
