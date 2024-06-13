import { TestBed } from '@angular/core/testing';

import { CrudRepository } from './crud.repository';

describe('CrudRepository', () => {
  let service: CrudRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
