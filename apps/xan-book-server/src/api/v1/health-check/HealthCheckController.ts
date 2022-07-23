import { Request, Response, NextFunction } from 'express';
import { IHealthCheckController, IHealthCheckService } from 'apps/xan-book-server/src/types';

export class HealthCheckController implements IHealthCheckController {
  private healthCheckService: IHealthCheckService;
  // inject controller dependencies here
  constructor(healthCheckService: IHealthCheckService) {
    this.healthCheckService = healthCheckService;
  }

  /**
   * GET HealthCheck Handler
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  async healthCheck(req: Request, res: Response, next: NextFunction) {
    try {
      const healthCheck = this.healthCheckService.getHealthCheckPayload();
      res.status(200).json(healthCheck);
    } catch (err) {
      next(err);
    }
  }
}
