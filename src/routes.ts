import * as Router from 'koa-router';
import controller = require('./controllers');

const router = new Router();

// Main routes
router.get('/', controller.main.helloWorld);

// User routes
router.get('/users', controller.user.getUsers);
router.get('/users/:id', controller.user.getUser);
// router.post('/users', controller.user.createUser);
// router.put('/users/:id', controller.user.updateUser);
// router.delete('/users/:id', controller.user.deleteUser);

export { router };
