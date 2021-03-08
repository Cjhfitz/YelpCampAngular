import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampgroundsComponent } from './campgrounds/campgrounds.component';
import { ShowCampgroundComponent } from './show-campground/show-campground.component';
import { NewCampgroundComponent } from './new-campground/new-campground.component';
import { EditCampgroundComponent } from './edit-campground/edit-campground.component';

// define object defining the path and which component to show
/**
 * To do
 *  - add route /campgrounds and associate it with CampgroundsComponent
 *  - redirect root to /campgrounds(CampgroundsComponent)
 */
// const routes: Routes = [
// {path: 'campgrounds', component: CampgroundsComponent},  // '' is the root route
// {path: 'campgrounds/:id', component: ShowCampgroundComponent},
// {path: 'campgrounds/new', component: NewCampgroundComponent},
// {path: 'campgrounds/:id/edit', component: EditCampgroundComponent}
// ];

const routes: Routes = [
  {path: '', component: CampgroundsComponent},
  {path: 'campgrounds', component: CampgroundsComponent},  // '' is the root route
  {path: 'campgrounds/new', component: NewCampgroundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
