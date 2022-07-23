import { HealthCheckPayload, IHealthCheckService } from '../../types';

export class HealthCheckService implements IHealthCheckService {
  // inject service dependencies here
  constructor() {}

  /**
   * returns service health check report
   * @returns HealthCheckPayload
   */
  getHealthCheckPayload(): HealthCheckPayload {
    return {
      uptime: process.uptime(),
      message: 'OK: API V1 is running',
      timestamp: Date.now(),
      responseTime: process.hrtime(),
    };
  }
}
