import { Injectable } from '@angular/core';
import { Player } from '../shared/models/player';
import { PLAYER_DATABASE } from '../shared/data/players';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getPlayers(): Observable<Player[]> {
    return of(PLAYER_DATABASE);
  }

  getCandidatePlayers(): Observable<Player[]> {
    return of(PLAYER_DATABASE.filter(player => player.rank === 'Candidate'));
  }

  getFeaturedPlayers(): Observable<Player[]> {
    return of(PLAYER_DATABASE.filter(player => player.rank === 'Featured player'));
  }

  getProPlayers(): Observable<Player[]> {
    return of(PLAYER_DATABASE.filter(player => player.rank === 'Pro'));
  }

  getLegendaryPlayers(): Observable<Player[]> {
    return of(PLAYER_DATABASE.filter(player => player.rank === 'Legendary'));
  }

  getHallOfFamePlayers(): Observable<Player[]> {
    return of(PLAYER_DATABASE.filter(player => player.inHallOfFame === true));
  }
}
