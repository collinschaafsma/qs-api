import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as helmet from 'koa-helmet';

export const app = new Koa();

import { router } from './routes';

app
    .use(helmet())
    .use(bodyParser())
    .use(router.routes());

function startFunction() {
    app.listen(3000);
}

// Don't start the app if we are importing app from our test runner
if (require.main === module) {
    startFunction();
}
