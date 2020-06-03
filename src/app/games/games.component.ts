import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Game } from '../shared/models/game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  selectedConsole: string = null;
  pcGames: Game[];

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Promeniti ovo kasnije da se inicijalizuje samo ako je selectedConsole = 'pc'
    this.gameService.getPcGames()
      .subscribe(pcGames => this.pcGames = pcGames);

    this.route.params
      .subscribe((params: Params) => this.selectedConsole = params['console']);
    console.log('Selected console: ' + this.selectedConsole)
  }

}
