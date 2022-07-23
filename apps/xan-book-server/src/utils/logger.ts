import * as config from 'config';
import debug from 'debug';

const serverConfig = config.get<Record<string, string>>('server');
const loggerMap = {};

/**
 * log the statement on basis of environment variable
 * @param data unknown
 * @param tag string
 * @returns void
 */
export const logger = function (data: unknown, tag: string = __filename) {
  let loggerInstance: debug.Debugger;
  const namespace = `${serverConfig.name}:${tag}`;

  if (loggerMap[namespace]) {
    loggerInstance = loggerMap[namespace];
  } else {
    loggerInstance = debug(namespace);
    loggerMap[namespace] = loggerInstance;
  }

  if (serverConfig.env === 'development' || serverConfig.env === 'test') {
    loggerInstance(data);
  } else {
    // Best Practice: Send logs to some logging server/DB
  }
};
