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
      // console.log(res.status);
      this.campgrounds = res.body;
    });
  }

  ngOnInit(): void {
    this.getCampgrounds();
  }


}
