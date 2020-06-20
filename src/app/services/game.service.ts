import { Injectable } from '@angular/core';
import { Game } from '../shared/models/game';
import { PC_GAMES } from '../shared/data/pc-games';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getPcGames(): Observable<Game[]> {
    return of(PC_GAMES);
  }

  getPcGameByName(name: string): Observable<Game> {
    return of(PC_GAMES.filter(game => game.name.toLowerCase() === name.toLowerCase())[0]);
  }
}
