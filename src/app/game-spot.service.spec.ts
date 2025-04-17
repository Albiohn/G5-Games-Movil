import { TestBed } from '@angular/core/testing';

import { GameSpotService } from './game-spot.service';

describe('GameSpotService', () => {
  let service: GameSpotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameSpotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
