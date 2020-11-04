import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Campground } from './models/campground';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampgroundService {

  constructor(private http: HttpClient) { }

  private campgroundsUrl = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

// tslint:disable-next-line:typedef
private handleError(error: HttpErrorResponse) {
  // checks if the error is a client-side or network error
  // ErrorEvent is a JS object
  if (error.error instanceof ErrorEvent) {
    console.log('An error occured', error.error.message);
  } else {
    // else the occured with the backend and a HTTP response
    // was sent with an error code.
    console.error(`Backend returned code ${error.status}`, +
    `body was ${error.error}`);
  }

  return throwError('Something bad happened;  please try again later.');
}

  // INDEX
  /**
   * Makes request for data on all campgrounds in DB
   */
  getCampgrounds(): Observable<Campground[]> {
    return this.http.get<Campground[]>(this.campgroundsUrl + '/campgrounds')
    .pipe(
      catchError(this.handleError)
    );
  }

  // SHOW
  /**
   * Makes request for information on a single campground, displays information only
   * @param campgroundId the campground's id
   */
  showCampground(campgroundId: string): Observable<Campground> {
    return this.http.get<Campground>(this.campgroundsUrl + '/campgrounds/' + campgroundId)
    .pipe(
      catchError(this.handleError)
    );
  }

  // NEW
  /**
   * Makes a request to add a new campground entry to the DB
   * @param campground a json object representing a campground
   */
  newCampground(campground: Campground): Observable<Campground> {
    console.log(campground);
    return this.http.post<Campground>(this.campgroundsUrl + '/campgrounds', campground, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
  // EDIT
  /**
   * retreives data on an existing campground to edit
   * @param campgroundId the campground's id
   */
  editCampground(campgroundId: string): Observable<Campground> {
    return this.http.get<Campground>(this.campgroundsUrl + '/campgrounds/' + campgroundId + '/edit')
    .pipe(
      catchError(this.handleError)
    );
  }

  // UPDATE
  /**
   * submits request to update an existing campground entry
   * @param campgroundId the campground's id
   * @param campground the updated campground
   */
  updateCampground(campgroundId: string, campground: Campground): Observable<Campground> {
    console.log(campground);
    return this.http.put<Campground>(this.campgroundsUrl + '/campgrounds/' + campgroundId, campground, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  // DESTROY
  deleteCampground(campgroundId: string): Observable<{}> {
    return this.http.delete(this.campgroundsUrl + '/campgrounds/' + campgroundId, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
}

