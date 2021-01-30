import { TestBed } from '@angular/core/testing';

import { NgDecisiongridService } from './ng-decisiongrid.service';

describe('NgDecisiongridService', () => {
  let service: NgDecisiongridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDecisiongridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
