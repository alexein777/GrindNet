import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { DefaultComponent } from '../default/default.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GamesComponent } from '../games/games.component';
import { HallOfFameComponent } from '../hall-of-fame/hall-of-fame.component';
import { SponsorsComponent } from '../sponsors/sponsors.component';
import { GamePreviewComponent } from '../game-preview/game-preview.component';
import { NominationsComponent } from '../nominations/nominations.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'games/:console', component: GamesComponent },
      { path: 'hall-of-fame', component: HallOfFameComponent },
      { path: 'sponsors', component: SponsorsComponent },
      { path: 'game-preview/:game', component: GamePreviewComponent },
      { path: 'nominations', component: NominationsComponent }
    ]
  }
];

