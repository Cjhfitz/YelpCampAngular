import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampgroundsComponent } from './campgrounds/campgrounds.component';
import { ShowCampgroundComponent } from './show-campground/show-campground.component';
import { NewCampgroundComponent } from './new-campground/new-campground.component';
import { EditCampgroundComponent } from './edit-campground/edit-campground.component';

// define object defining the path and which component to show
const routes: Routes = [
{path: '', component: CampgroundsComponent},  // '' is the root route
{path: 'campground/:id', component: ShowCampgroundComponent},
{path: 'newCampground', component: NewCampgroundComponent},
{path: 'campground/:id/edit', component: EditCampgroundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
