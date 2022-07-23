import { Response, NextFunction } from 'express';
import { RequestWithRequestID } from '../types';
import { logger } from '../utils/logger';

const TAG = 'apps/xan-book-server/src/middlewares/errorhandler.ts';

export const errorHandler = function () {
  return (err: Error, req: RequestWithRequestID, res: Response, next: NextFunction) => {
    logger(`Error for request id ${req.requestID}: ${req.url} - ${req.method} - ${err.stack}`, TAG);
    res.status(500).json({ message: `Internal Server Error: ${err.message}` });
  };
};
