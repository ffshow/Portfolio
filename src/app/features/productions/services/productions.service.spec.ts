import { TestBed } from '@angular/core/testing';

import { ProductionsService } from './productions.service';

describe('ProductionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductionsService = TestBed.get(ProductionsService);
    expect(service).toBeTruthy();
  });
});
