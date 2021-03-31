import { TestBed } from '@angular/core/testing';

import { NgDecisionrulesService } from './ng-decisionrules.service';

describe('NgDecisionrulesService', () => {
  let service: NgDecisionrulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDecisionrulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
