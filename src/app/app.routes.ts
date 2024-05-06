import { Routes } from '@angular/router';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

export const routes: Routes = [
    { path: 'movies/:id', component: MovieDetailComponent},
    { path: '', component: MovieListComponent},
    { path: '*', component: MovieListComponent},
];
