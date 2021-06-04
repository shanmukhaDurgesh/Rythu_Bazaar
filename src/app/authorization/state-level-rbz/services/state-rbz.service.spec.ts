import { TestBed } from '@angular/core/testing';

import { StateRbzService } from './state-rbz.service';

describe('StateRbzService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateRbzService = TestBed.get(StateRbzService);
    expect(service).toBeTruthy();
  });
});
