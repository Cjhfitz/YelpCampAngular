import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Campground } from '../app/campground';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampgroundService {

  constructor(private http: HttpClient) { }

  private campgroundsUrl = 'http://localhost:3000/campgrounds';

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

  getCampgrounds(): Observable<Campground[]> {
    return this.http.get<Campground[]>(this.campgroundsUrl)
    .pipe(
      catchError(this.handleError<Campground[]>('getCampgrounds', []))
    );
  }
}

