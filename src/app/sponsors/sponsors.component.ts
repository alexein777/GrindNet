import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../shared/models/sponsor';
import { SponsorService } from '../services/sponsor.service';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  sponsors: Sponsor[];

  constructor(private sponsorService: SponsorService) { }

  ngOnInit(): void {
    this.sponsorService.getSponsors()
      .subscribe(sponsors => this.sponsors = sponsors);
  }

}
