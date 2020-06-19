import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { GameGuideDataService } from '../services/game-guide-data.service';

@Component({
  selector: 'app-game-preview',
  templateUrl: './game-preview.component.html',
  styleUrls: ['./game-preview.component.scss']
})
export class GamePreviewComponent implements OnInit {
  selectedGame: string = null;

  constructor(private route: ActivatedRoute, public ggData: GameGuideDataService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => this.selectedGame = params['game']);
  }

}
