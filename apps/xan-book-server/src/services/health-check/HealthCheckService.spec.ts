import { HealthCheckService } from './HealthCheckService';

describe('HealthCheckService', () => {
  let healthCheckService: HealthCheckService;
  beforeEach(() => {
    healthCheckService = new HealthCheckService();
  });

  it('should return health check payload', () => {
    let response = healthCheckService.getHealthCheckPayload();
    expect(response.message).toBe('OK: API V1 is running');
  });
});
