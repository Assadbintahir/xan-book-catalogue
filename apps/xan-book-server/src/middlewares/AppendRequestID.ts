import { Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { RequestWithRequestID } from '../types';
import { logger } from '../utils/logger';

const TAG = 'apps/xan-book-server/src/middlewares/appendRequestId.ts';

export const appendRequestID = function () {
  return function (req: RequestWithRequestID, res: Response, next: NextFunction) {
    const requestID = uuidv4();
    req.requestID = requestID;
    logger(`Appended Request ID: ${requestID}`, TAG);
    next();
  };
};
