import { Component, OnInit } from '@angular/core';
import {IMovie} from './movie'
import { MovieListService } from './movie-list.service';



@Component({
  selector: 'aml',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: IMovie[] = [];
  errorMessage: string;

  constructor(private movielistservice: MovieListService) { }

  ngOnInit(): void {
    this.movielistservice.getMovies().subscribe({
      next: movies => this.movies = movies,
      error: err => this.errorMessage = err
    });
  }

}
