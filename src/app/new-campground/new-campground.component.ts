import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CampgroundService } from '../campground.service';
import { Campground } from '../models/campground';

@Component({
  selector: 'app-new-campground',
  templateUrl: './new-campground.component.html',
  styleUrls: ['./new-campground.component.css']
})
export class NewCampgroundComponent implements OnInit {

  campground: Campground = {
    _id: 0,
    name: '',
    image: '',
    price: '',
    description: ''
  };

  constructor(private route: ActivatedRoute, private location: Location, private campgroundService: CampgroundService) { }


  addCampground(): void {
    console.log(this.campground);
    this.campgroundService.newCampground(this.campground)
    .subscribe();
  }

  printCampground(): void {
    console.log(this.campground);
  }

  ngOnInit(): void {

  }

}
