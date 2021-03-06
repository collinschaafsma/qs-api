import * as Router from 'koa-router';
import { default as userController } from './user.controller';

const userRouter = new Router();

// User routes
userRouter.get('/users', userController.getUsers);
userRouter.get('/users/:id', userController.getUser);
userRouter.post('/users', userController.createUser);
// router.put('/users/:id', controller.user.updateUser);
// router.delete('/users/:id', controller.user.deleteUser);

export { userRouter };
