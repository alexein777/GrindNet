import { TestBed } from '@angular/core/testing';

import { GameGuideDataService } from './game-guide-data.service';

describe('GameGuideDataService', () => {
  let service: GameGuideDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameGuideDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
