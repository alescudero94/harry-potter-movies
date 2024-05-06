import { Component } from '@angular/core';
import { Movie } from '../../models/harry-potter-movie.model';
import { HarryPotterMovieService } from '../../services/harry-potter-movie.service';
import { CurrencyPipe, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TransformHourPipe } from '../../pipes/transform-hour.pipe';

@Component({
  selector: 'hp-movie-list',
  standalone: true,
  imports: [NgFor, HttpClientModule, RouterModule, CurrencyPipe, FormsModule, TransformHourPipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  searchTitle: string = '';
  searchYear: string = '';
  constructor(private HPMovieService: HarryPotterMovieService) { }

  ngOnInit(): void {
    //Get the list of movies from the service
    this.HPMovieService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.filterMovies(); //apply filters
    });
  }

  /**
   * Method to filter movies by title or year
   */
  filterMovies(): void {
    this.filteredMovies = this.movies.filter(movie => {
      return (movie.title.toLowerCase().includes(this.searchTitle.toLowerCase()) && movie.release_date.includes((this.searchYear ?? 0)));
      /**
       * this.searchYear ?? 0 --> To prevent the list of movies from being empty when you delete the year filter
       */
    });
  }
}
