import { TestBed } from '@angular/core/testing';

import { RamService } from './ram.service';

describe('RamService', () => {
  let service: RamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
