import { Component, OnInit } from '@angular/core';
import { Nomination } from '../shared/models/nomination';
import { NominationsService } from '../services/nominations.service';

@Component({
  selector: 'app-nominations',
  templateUrl: './nominations.component.html',
  styleUrls: ['./nominations.component.scss']
})
export class NominationsComponent implements OnInit {
  nominations: Nomination[];

  constructor(private nominationService: NominationsService) { }

  ngOnInit(): void {
    this.nominationService.getNominations()
      .subscribe(nominations => this.nominations = nominations);
  }

  onCatchCreatedNomination(createdNomination: Nomination) {
    this.nominations.push(createdNomination);
  }
}
