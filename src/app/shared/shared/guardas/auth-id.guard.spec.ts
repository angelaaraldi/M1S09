import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { authIdGuard } from './auth-id.guard';

describe('authIdGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authIdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
