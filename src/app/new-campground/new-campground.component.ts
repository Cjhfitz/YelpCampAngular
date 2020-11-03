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

  /**
   * Problem:  Able to update campground w/o defining the fields, but when sending the request to the server empty entries were created
   * Solution: defined properties with empty values to be updated and then sent to the server
   *
   * I think before only the view was being changed so nothing was actually being sent to the server
   */
  campground: Campground = {
    _id: 0,
    name: '',
    image: '',
    price: '',
    description: ''
  };

  constructor(private location: Location, private campgroundService: CampgroundService) { }


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
