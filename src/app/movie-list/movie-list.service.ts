import { Injectable } from '@angular/core';
import {IMovie} from './movie';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class MovieListService {

    private movieUrl = 'assets/movies.json';
    constructor(private http: HttpClient){}
    
    getMovies(): Observable<IMovie[]>{
        return this.http.get<IMovie[]>(this.movieUrl).pipe(
            tap(data => console.log('All' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getMovie(id: string): Observable<IMovie | undefined> {
        return this.getMovies()
          .pipe(
            map((movies: IMovie[]) => movies.find(p => p.objectId === id))
          );
      }

    private handleError(err: HttpErrorResponse){
        
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }

        console.error(errorMessage);
        return throwError(errorMessage);
    }
}