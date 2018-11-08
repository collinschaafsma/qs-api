import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as cors from '@koa/cors';
import * as helmet from 'koa-helmet';
import * as ssl from 'koa-sslify';

export const app = new Koa();

import { config } from './config';
import { logger } from './logger';
import { router } from './routes';

function enforceHttps(mw: Koa.Middleware) {
    return async function(ctx: Koa.Context, next: Function) {
        if (process.env.NODE_ENV === 'production') {
            // must .call() to explicitly set the receiver
            await mw.call(this, ctx, next);
        } else {
            await next();
        }
    };
}

app
    .use(helmet())
    .use(bodyParser())
    .use(cors())
    .use(enforceHttps(ssl({trustProtoHeader: true})))
    .use(router.routes()).use(router.allowedMethods());

function startApp() {
    logger.log('info', 'App running on port %d', config.port);
    app.listen(config.port);
}

// Don't start the app if we are importing app from our test runner
if (require.main === module) {
    startApp();
}
