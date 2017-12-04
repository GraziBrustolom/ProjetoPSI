import { TestBed, inject } from '@angular/core/testing';

import { CaoService } from './cao.service';

describe('CaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaoService]
    });
  });

  it('should be created', inject([CaoService], (service: CaoService) => {
    expect(service).toBeTruthy();
  }));
});
