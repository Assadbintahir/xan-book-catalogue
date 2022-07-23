import { HealthCheckPayload, IHealthCheckService } from '../../types';

export class MockHealthCheckService implements IHealthCheckService {
  getHealthCheckPayload(): HealthCheckPayload {
    throw new Error('Error while checking service health');
  }
}
