import { TestBed } from '@angular/core/testing';

import { MisReservasService } from './mis-reservas.service';

describe('MisReservasService', () => {
  let service: MisReservasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisReservasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
