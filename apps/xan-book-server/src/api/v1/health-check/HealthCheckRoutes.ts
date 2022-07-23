import { HealthCheckService } from 'apps/xan-book-server/src/services';
import { Router } from 'express';
import { HealthCheckController } from './HealthCheckController';

/**
 * sets up HealthCheck controller & API Routes
 * @param router express.Router
 */
export const HealthCheckRoutes = (router: Router) => {
  const healthCheckService = new HealthCheckService();
  const controller = new HealthCheckController(healthCheckService);

  router.get('/api/v1/health-check', controller.healthCheck.bind(controller));
};
