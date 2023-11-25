import { TestBed } from '@angular/core/testing';

import { UserNameValidationServiceService } from './user-name-validation-service.service';

describe('UserNameValidationServiceService', () => {
  let service: UserNameValidationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserNameValidationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
