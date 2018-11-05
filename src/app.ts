import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as helmet from 'koa-helmet';
import * as winston from 'winston';

export const app = new Koa();

import { logger } from './logger';
import { router } from './routes';


app
    .use(helmet())
    .use(bodyParser())
    .use(router.routes());

function startFunction() {
    logger.log('info', 'App running on port %d', 3000);
    app.listen(3000);
}

// Don't start the app if we are importing app from our test runner
if (require.main === module) {
    startFunction();
}
