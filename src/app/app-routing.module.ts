import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampgroundsComponent } from './campgrounds/campgrounds.component';
import { CampgroundComponent } from './campground/campground.component';
import { NewCampgroundComponent } from './new-campground/new-campground.component';

// define object defining the path and which component to show
const routes: Routes = [
{path: '', component: CampgroundsComponent},  // '' is the root route
{path: 'campground/:id', component: CampgroundComponent},
{path: 'newCampground', component: NewCampgroundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
