import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  sponsorImageSrcs: string[];

  constructor() { }

  ngOnInit(): void {
    this.sponsorImageSrcs = [
      '../../assets/images/sponsors/cyberpower-pc.jpg',
      '../../assets/images/sponsors/dx-racer.png',
      '../../assets/images/sponsors/hyperX.jpg',
      '../../assets/images/sponsors/ibuypower.jpg',
      '../../assets/images/sponsors/monster.jpg',
      '../../assets/images/sponsors/nighthawk.jpg',
      '../../assets/images/sponsors/benq.jpg'
    ];
  }

}
