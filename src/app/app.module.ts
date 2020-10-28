import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { CampgroundsComponent } from './campgrounds/campgrounds.component';
import { ShowCampgroundComponent } from './show-campground/show-campground.component';
import { NewCampgroundComponent } from './new-campground/new-campground.component';
import { EditCampgroundComponent } from './edit-campground/edit-campground.component';

@NgModule({
  declarations: [
    AppComponent,
    CampgroundsComponent,
    ShowCampgroundComponent,
    NewCampgroundComponent,
    EditCampgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
