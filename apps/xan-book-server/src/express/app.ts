import * as express from 'express';
import * as morgan from 'morgan';
import * as compression from 'compression';
import * as methodOverride from 'method-override';
import * as config from 'config';
import * as cors from 'cors';
import helmet from 'helmet';
import * as http from 'http';
import { logger } from '../utils';
import { errorHandler, appendRequestID } from '../middlewares';

let server: http.Server;
const serverConfig = config.get<Record<string, string>>('server');
const TAG = 'apps/xan-book-server/src/express/app.ts';

/**
 * Bootstrap express application
 */
export const startApp = async () => {
  const app = express();

  app.use(compression());
  app.use(helmet());
  app.use(methodOverride());
  app.use(appendRequestID());
  app.use(
    cors({
      // ADD ORIGINS TO ALLOW FOR I.E. QA & PROD
      origin: 'http://localhost:4200',
    })
  );

  if (serverConfig.env === 'development' || serverConfig.env === 'test') {
    app.use(morgan('combined'));
  }

  const { setupRoutes } = await import('./routes');
  setupRoutes(app, express.Router());
  app.use(errorHandler());

  server = http.createServer(app);
  return server.listen(serverConfig.port, () => {
    logger(`${serverConfig.name} Server started on port :${serverConfig.port} in ${serverConfig.env} mode.`, TAG);
  });
};

/**
 * stops express application
 * @param callback
 */
export const stopApp = (callback) => {
  server.close(() => {
    callback();
  });
};
