import { Express, Router } from 'express';
import { HealthCheckRoutes, BookRoutes } from '../api/v1';

/**
 *
 * @param app Express
 * @param router Router
 */
export const setupRoutes = (app: Express, router: Router) => {
  HealthCheckRoutes(router);
  BookRoutes(router);

  app.use(router);
};
