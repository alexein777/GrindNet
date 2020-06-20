import { Component, OnInit, ViewChild } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Game } from '../shared/models/game';
import { GameService } from '../services/game.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  selectedConsole: string = null;
  pcGames: Game[];
  searchText = '';

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Promeniti ovo kasnije da se inicijalizuje samo ako je selectedConsole = 'pc'
    this.gameService.getPcGames()
      .subscribe(pcGames => this.pcGames = pcGames);

    this.route.params
      .subscribe((params: Params) => this.selectedConsole = params['console']);

    console.log(this.route.snapshot);
  }

  nameToRoute(gameName: string) {
    if (gameName === undefined || gameName === '') {
      return 'none';
    }

    return gameName.toLowerCase().replace(' ', '-');
  }

  onSearchGame(searchInput: string) {
    console.log('Searching for: ' + searchInput);

    if (searchInput === 'undefined' || searchInput === '') {
      this.gameService.getPcGames()
        .subscribe(pcGames => this.pcGames = pcGames);
    } else {
        this.gameService.getPcGameByName(searchInput)
          .subscribe(game => {
            this.pcGames = [];
            this.pcGames.push(game);
          });
    }
  }
}
