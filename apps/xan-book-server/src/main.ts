import { startApp, stopApp } from './express/app';
import { logger } from './utils/logger';

const TAG = 'apps/xan-book-server/src/main.ts';

/**
 * Gracefully shutdown the server
 * Best Practice: handle any pending tasks i.e. handling events in queues or in transit requests
 */
const appOut = () => {
  logger('Going to terminate the process', TAG);
  stopApp(() => {
    process.exit();
  });
  setTimeout(function () {
    process.exit();
  }, 10000);
};

/**
 * logging unhandled exceptions
 * @param error Error
 */
const exceptionHandler = (error: Error) => {
  logger(`Uncaught Exception: ${error.stack}`, TAG);
};

(async () => {
  await startApp();
})();

// handle exceptions and quit signals.
process.on('SIGTERM', appOut);
process.on('SIGINT', appOut);
process.on('uncaughtException', exceptionHandler);
