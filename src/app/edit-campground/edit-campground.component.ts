import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';  // forgot to import this
import { CampgroundService } from '../campground.service';
import { Campground } from '../models/campground';

@Component({
  selector: 'app-edit-campground',
  templateUrl: './edit-campground.component.html',
  styleUrls: ['./edit-campground.component.css']
})
export class EditCampgroundComponent implements OnInit {

  campground: Campground;

  constructor(private route: ActivatedRoute, private campgroundService: CampgroundService, private location: Location) { }

  editCampground(): void {
    // get id from URL
    const id = this.route.snapshot.paramMap.get('id');

    // retrieve campground and store it
    this.campgroundService.editCampground(id).subscribe(campground => this.campground = campground);
  }

  // UPDATE
  updateCampground(): void {
    console.log(this.campground);
    this.campgroundService.updateCampground(this.campground._id.toString(), this.campground)
    .subscribe();
    this.location.back();
  }

  ngOnInit(): void {
    this.editCampground();
  }

}
