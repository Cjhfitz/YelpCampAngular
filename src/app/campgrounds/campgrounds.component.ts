import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Campground } from '../models/campground';

import { CampgroundService } from '../campground.service';

@Component({
  selector: 'app-campgrounds',
  templateUrl: './campgrounds.component.html',
  styleUrls: ['./campgrounds.component.css']
})
export class CampgroundsComponent implements OnInit {

  campgrounds: Campground[];

  testCampground: Campground = {
    name: 'test',
    price: '1000000',
    image: 'testAngular',
    description: 'TEST'
  };

  constructor(private campgroundService: CampgroundService) { }

  getCampgrounds(): void {
    this.campgroundService.getCampgrounds()
    .subscribe(campgrounds => this.campgrounds = campgrounds);
  }

  addCampground(campground: Campground): void {
    this.campgroundService.addCampground(campground).subscribe();
  }


  ngOnInit(): void {

  }


}
