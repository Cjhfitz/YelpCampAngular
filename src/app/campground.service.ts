import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Campground } from './models/campground';
import { Observable, of } from 'rxjs';

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
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    // this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  // INDEX
  /**
   * Makes request for data on all campgrounds in DB
   */
  getCampgrounds(): Observable<Campground[]> {
    return this.http.get<Campground[]>(this.campgroundsUrl + '/campgrounds')
    .pipe(
      // catchError(this.handleError<Campground[]>('getCampgrounds', []))
    );
  }

  // SHOW
  /**
   * Makes request for information on a single campground, displays information only
   * @param campgroundId the campground's id
   */
  showCampground(campgroundId: string): Observable<Campground> {
    return this.http.get<Campground>(this.campgroundsUrl + '/campgrounds/' + campgroundId)
    .pipe();
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
      // catchError(this.handleError('addCampground', campground))
    );
  }
  // EDIT
  /**
   * retreives data on an existing campground to edit
   * @param campgroundId the campground's id
   */
  editCampground(campgroundId: string): Observable<Campground> {
    return this.http.get<Campground>(this.campgroundsUrl + '/campgrounds/' + campgroundId + '/edit')
    .pipe();
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
    .pipe();
  }

  // DESTROY
  deleteCampground(campgroundId: string): Observable<{}> {
    return this.http.delete(this.campgroundsUrl + '/campgrounds/' + campgroundId, this.httpOptions)
    .pipe();
  }
}

