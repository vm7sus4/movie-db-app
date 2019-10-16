import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any[] = [
    {
      "movieBanner": "assets/banners/1.jpg",
      "movieRank": 1,
      "movieTitle": "Planet Of The Apes",
      "movieRating": 4.4,
    },
    {
      "movieBanner": "assets/banners/2.jpg",
      "movieRank": 2,
      "movieTitle": "Titanic",
      "movieRating": 1.4,
    },
    {
      "movieBanner": "assets/banners/3.jpg",
      "movieRank": 3,
      "movieTitle": "Police Academy 3",
      "movieRating": 3.1,
    },
    {
      "movieBanner": "assets/banners/4.jpg",
      "movieRank": 4,
      "movieTitle": "Transformers",
      "movieRating": 2.6,
    },
    {
      "movieBanner": "assets/banners/5.jpg",
      "movieRank": 5,
      "movieTitle": "Shrek 2",
      "movieRating": 4.9,
    },
    {
      "movieBanner": "assets/banners/6.jpg",
      "movieRank": 6,
      "movieTitle": "Johnny English",
      "movieRating": 3.4,
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
