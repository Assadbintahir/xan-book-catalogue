import { Request, Response, NextFunction } from 'express';

export interface HealthCheckPayload {
  uptime: number;
  message: string;
  timestamp: number;
  responseTime: number[];
}

export interface IHealthCheckService {
  getHealthCheckPayload: () => HealthCheckPayload;
}

export interface IHealthCheckController {
  healthCheck: (req: Request, res: Response, next: NextFunction) => void;
}
