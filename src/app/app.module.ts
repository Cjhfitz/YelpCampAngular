import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CampgroundsComponent } from './campgrounds/campgrounds.component';
import { CampgroundComponent } from './campground/campground.component';
import { NewCampgroundComponent } from './new-campground/new-campground.component';

@NgModule({
  declarations: [
    AppComponent,
    CampgroundsComponent,
    CampgroundComponent,
    NewCampgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
