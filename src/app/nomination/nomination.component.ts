import { Component, OnInit, Input } from '@angular/core';
import { Nomination } from '../shared/models/nomination';

@Component({
  selector: 'app-nomination',
  templateUrl: './nomination.component.html',
  styleUrls: ['./nomination.component.scss']
})
export class NominationComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('nominationData')
  public nomination: Nomination;

  constructor() { }

  ngOnInit(): void {
  }

}
