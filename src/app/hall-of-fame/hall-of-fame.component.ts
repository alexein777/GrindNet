import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/models/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-hall-of-fame',
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.scss']
})
export class HallOfFameComponent implements OnInit {
  hallOfFamePlayers: Player[];
  hrkDate = new Date(Date.now())
  mrxDate = new Date('5/23/2020');

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getHallOfFamePlayers()
      .subscribe(players => this.hallOfFamePlayers = players);
  }

}
