import * as Router from 'koa-router';
import { default as rootController } from './root.controller';

const rootRouter = new Router();

// Root routes
rootRouter.get('/', rootController.helloWorld);

export { rootRouter };
