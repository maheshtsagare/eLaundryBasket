import { TestBed } from '@angular/core/testing';

import { ServicePricingService } from './service-pricing.service';

describe('ServicePricingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicePricingService = TestBed.get(ServicePricingService);
    expect(service).toBeTruthy();
  });
});
