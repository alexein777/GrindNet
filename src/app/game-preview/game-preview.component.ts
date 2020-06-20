import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { GameGuideDataService } from '../services/game-guide-data.service';
import { GameGuide } from '../shared/models/game-guide';

@Component({
  selector: 'app-game-preview',
  templateUrl: './game-preview.component.html',
  styleUrls: ['./game-preview.component.scss']
})
export class GamePreviewComponent implements OnInit {
  private sortRatingOrder = 'ascending';
  selectedGame: string = null;

  constructor(private route: ActivatedRoute, public ggDataService: GameGuideDataService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => this.selectedGame = params['game']);

    console.log(`Selected game: ${this.selectedGame}`);
  }

  routeToName(route: string) {
    if (route === undefined || route === '') {
      return 'none';
    } else {
      return route.replace('-', ' ');
    }
  }

  sortByName() {

  }

  sortByAuthor() {

  }

  sortByAuthorRank() {

  }

  sortByAuthorInHallOfFame() {

  }

  sortByRating() {
    if (this.sortRatingOrder === 'ascending') {
      this.ggDataService.dota2Guides.sort((guide1, guide2) => guide2.rating - guide1.rating);
      this.sortRatingOrder = 'descending';
    } else {
      this.ggDataService.dota2Guides.sort((guide1, guide2) => guide1.rating - guide2.rating);
      this.sortRatingOrder = 'ascending';
    }
  }

  sortByDateCreated() {

  }

}


