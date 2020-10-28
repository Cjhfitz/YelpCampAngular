import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampgroundService } from '../campground.service';
import { Campground } from '../models/campground';

@Component({
  selector: 'app-edit-campground',
  templateUrl: './edit-campground.component.html',
  styleUrls: ['./edit-campground.component.css']
})
export class EditCampgroundComponent implements OnInit {

  campground = new Campground();

  constructor(private route: ActivatedRoute, private campgroundService: CampgroundService, private location: Location) { }

  editCampground(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.campgroundService.editCampground(id).subscribe(campground => this.campground = campground);
  }

  // showCampground(): void {
  //   const id = this.route.snapshot.paramMap.get('id');  // + can be used to convert a string to a number
  //   this.campgroundService.showCampground(id).subscribe(campground => this.campground = campground);
  // }

  ngOnInit(): void {
  }

}
