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

  campgrounds: Campground[] = [];

  constructor(private campgroundService: CampgroundService) { }

  // INDEX
  getCampgrounds(): void {
    this.campgroundService.getCampgrounds()
    .subscribe(res => {
      this.campgrounds = res.body;
    });
  }

  printCampgrounds(): void {
    console.log(this.campgrounds);
    console.log(typeof this.campgrounds);
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


  // DESTROY


  ngOnInit(): void {
    this.getCampgrounds();
  }


}
