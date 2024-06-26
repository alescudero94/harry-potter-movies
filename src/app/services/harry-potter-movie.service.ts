import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/harry-potter-movie.model';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterMovieService {

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`/movies`);
  }

  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`/movies/${id}`);
  }
}
