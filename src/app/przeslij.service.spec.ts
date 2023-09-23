import { TestBed } from '@angular/core/testing';

import { PrzeslijService } from './przeslij.service';

describe('PrzeslijService', () => {
  let service: PrzeslijService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrzeslijService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
