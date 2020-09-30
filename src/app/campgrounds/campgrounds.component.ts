import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Campground } from '../campground';

import { CampgroundService } from '../campground.service';

@Component({
  selector: 'app-campgrounds',
  templateUrl: './campgrounds.component.html',
  styleUrls: ['./campgrounds.component.css']
})
export class CampgroundsComponent implements OnInit {

  campgrounds: Campground[];

  constructor(private campgroundService: CampgroundService) { }

  getCampgrounds(): void {
    this.campgroundService.getCampgrounds()
    .subscribe(campgrounds => {
      console.log(campgrounds);
      this.campgrounds = campgrounds;
    });
  }


  ngOnInit(): void {
    this.getCampgrounds();
  }


}
