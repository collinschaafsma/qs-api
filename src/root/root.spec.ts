import { app } from '../../src/app';

import * as request from 'supertest';

const agent = request.agent(app.listen());

describe('Root', () => {
  describe('GET /', () => {
    it('should result in name response', () => {
      return agent.get('/').expect(200, '{"app":"QS API"}');
    });
  });
});
