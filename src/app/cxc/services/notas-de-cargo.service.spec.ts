import { TestBed, inject } from '@angular/core/testing';

import { NotasDeCargoService } from './notas-de-cargo.service';

describe('NotasDeCargoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotasDeCargoService]
    });
  });

  it('should be created', inject([NotasDeCargoService], (service: NotasDeCargoService) => {
    expect(service).toBeTruthy();
  }));
});
