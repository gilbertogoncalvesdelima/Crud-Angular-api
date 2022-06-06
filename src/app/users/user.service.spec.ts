import { TestBed } from '@angular/core/testing';

import { UsersuserService } from './user.service';

describe('UsersuserService', () => {
  let service: UsersuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
