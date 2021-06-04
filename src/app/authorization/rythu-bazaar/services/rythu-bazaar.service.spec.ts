import { TestBed } from '@angular/core/testing';

import { RythuBazaarService } from './rythu-bazaar.service';

describe('RythuBazaarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RythuBazaarService = TestBed.get(RythuBazaarService);
    expect(service).toBeTruthy();
  });
});
