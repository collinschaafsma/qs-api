import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as helmet from 'koa-helmet';

export const app = new Koa();

import { config } from './config';
import { logger } from './logger';
import { router } from './routes';

app
    .use(helmet())
    .use(bodyParser())
    .use(router.routes());

function startApp() {
    logger.log('info', 'App running on port %d', config.port);
    app.listen(config.port);
}

// Don't start the app if we are importing app from our test runner
if (require.main === module) {
    startApp();
}
