import { Request } from 'express';

export interface RequestWithRequestID extends Request {
  requestID?: string,
}
