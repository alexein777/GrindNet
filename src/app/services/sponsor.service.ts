import { Injectable } from '@angular/core';
import { Sponsor } from '../shared/models/sponsor';
import { SPONSORS } from '../shared/data/sponsors';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  constructor() { }

  getSponsors(): Observable<Sponsor[]> {
    return of(SPONSORS);
  }
}
