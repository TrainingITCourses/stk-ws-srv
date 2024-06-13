import { TestBed } from '@angular/core/testing';

import { AuthStoreStore } from './auth.store';

describe('AuthStore', () => {
  let service: AuthStoreStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthStoreStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
