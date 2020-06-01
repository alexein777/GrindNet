import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  slideshowImages: string[];

  constructor() { }

  ngOnInit(): void {
    this.slideshowImages = [
      '../../assets/images/skill.png',
      '../../assets/images/hall-of-fame.jpg',
      '../../assets/images/gaming-sponsors.jpg',
      '../../assets/images/esports.jpg'
    ];
  }

}
