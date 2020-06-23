import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Nomination } from '../shared/models/nomination';
import { NOMINATIONS } from '../shared/data/nominations';

@Injectable({
  providedIn: 'root'
})
export class NominationsService {

  constructor() { }

  getNominations(): Observable<Nomination[]> {
    return of(NOMINATIONS);
  }
}
