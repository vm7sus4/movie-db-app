import { Component, OnInit } from '@angular/core';
import {IMovie} from 'src/app/movie-list/movie';
import {ActivatedRoute, Router} from '@angular/router';
import { MovieListService } from 'src/app/movie-list/movie-list.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  pageTitle: string = 'Movie Details';
  errorMessage ='';
  movie: IMovie | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private movieService: MovieListService) { 

    }

  ngOnInit() {
      const param = this.route.snapshot.paramMap.get('id');
      if (param) {
        const id = param;
        this.getMovie(id);
      }
    }
  
    getMovie(id: string) {
      this.movieService.getMovie(id).subscribe({
        next: movie => this.movie = movie,
        error: err => this.errorMessage = err
      });
    }
 
  

}
