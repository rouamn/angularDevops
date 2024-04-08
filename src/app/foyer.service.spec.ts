import { TestBed } from '@angular/core/testing';

import { FoyerService } from './foyer.service';

describe('FoyerService', () => {
  let service: FoyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
