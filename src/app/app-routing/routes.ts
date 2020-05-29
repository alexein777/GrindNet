import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { DefaultComponent } from '../default/default.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

