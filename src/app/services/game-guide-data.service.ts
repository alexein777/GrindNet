import { Injectable } from '@angular/core';
import { GameGuide } from '../shared/models/game-guide';
import { PLAYER_DATABASE } from '../shared/data/players';
import { DOTA2_GUIDES } from '../shared/data/game-guides';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameGuideDataService {
  dota2Guides: GameGuide[];

  constructor() {
    this.dota2Guides = DOTA2_GUIDES;
  }

  // getDota2Guides(): Observable<GameGuide[]> {
  //   return of(DOTA2_GUIDES);
  // }
}
