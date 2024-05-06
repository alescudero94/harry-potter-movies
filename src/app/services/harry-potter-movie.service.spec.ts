import { TestBed } from '@angular/core/testing';

import { HarryPotterMovieService } from './harry-potter-movie.service';

describe('HarryPotterMovieService', () => {
  let service: HarryPotterMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarryPotterMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
