import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampgroundComponent } from './campground/campground.component';

const routes: Routes = [
{path: 'campground/:id', component: CampgroundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
