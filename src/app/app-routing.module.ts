import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'movie-list', component: MovieListComponent},
    {path: 'movie-list/:id', component: MovieDetailComponent},
    {path: '', redirectTo: 'movie-list', pathMatch:'full'},
    {path: '**', redirectTo: 'movie-list', pathMatch:'full'}
  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
