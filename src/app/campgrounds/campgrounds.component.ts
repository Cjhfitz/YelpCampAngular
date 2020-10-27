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

  // testCampground: Campground = {
  //   name: 'test',
  //   price: '1000000',
  //   image: 'testAngular',
  //   description: 'TEST'
  // };

  // campgroundId = '5f6ac53729130300177a9dfe';

  constructor(private campgroundService: CampgroundService) { }

  // INDEX
  getCampgrounds(): void {
    this.campgroundService.getCampgrounds()
    .subscribe(campgrounds => this.campgrounds = campgrounds);
  }

  // CREATE
  // addCampground(campground: Campground): void {
  //   this.campgroundService.addCampground(campground).subscribe();
  // }

  // EDIT
  // editCampground(campgroundId: string): void {
  //   this.campgroundService.editCampground(this.campgroundId)
  //   .subscribe(campground => this.campground = campground);
  // }

  // UPDATE
  // updateCampground(campgroundId: string): void {
  //   this.campgroundService.updateCampground(campgroundId, this.campground)
  //   .subscribe();
  // }
  // DESTROY


  ngOnInit(): void {
    this.getCampgrounds();
  }


}
