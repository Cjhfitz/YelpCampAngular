import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CampgroundService } from '../campground.service';
import { Campground } from '../models/campground';

@Component({
  selector: 'app-campground',
  templateUrl: './campground.component.html',
  styleUrls: ['./campground.component.css']
})
export class CampgroundComponent implements OnInit {

  campground: Campground;

  constructor(private route: ActivatedRoute, private campgroundService: CampgroundService, private location: Location) { }

  showCampground(): void {
    const id = this.route.snapshot.paramMap.get('id');  // + can be used to convert a string to a number
    this.campgroundService.showCampground(id).subscribe(campground => this.campground = campground);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.showCampground();
  }

}
