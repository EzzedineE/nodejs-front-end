import { TestBed } from '@angular/core/testing';

import { SondagesService } from './sondages.service';

describe('SondagesService', () => {
  let service: SondagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SondagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
