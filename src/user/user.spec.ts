import { app } from '../../src/app';

import * as request from 'supertest';
import { IUser, User } from './user.model';

const agent = request.agent(app.listen());

describe('User', () => {
  describe('GET /users', () => {
    it('should result in 200 status', () => {
      return agent.get('/users').expect(200);
    });
  });
});

describe('POST /users', () => {
  afterEach(() => {
    return User.collection.drop();
  });

  it('POST should respond in a 201 status', () => {
    return agent
      .post('/users')
      .send({name: 'Collin Schaafsma'})
      .send({email: 'something@somthing.com'})
      .send({password: 'passw0rd'})
      .set('Accept', 'application/json')
      .expect(201);

  });

  it('Dup email should respond in a 400 status', () => {
    const newUser: IUser = new User({
      email: 'dup@dup.com',
      name: 'Collin',
      password: 'passw0rd',
    });

    newUser.save();

    return agent
      .post('/users')
      .send({name: 'Collin Schaafsma'})
      .send({email: 'dup@dup.com'})
      .send({password: 'passw0rd'})
      .set('Accept', 'application/json')
      .expect(400);
  });
});
