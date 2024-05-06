import { Component } from '@angular/core';
import { Movie } from '../../models/harry-potter-movie.model';
import { ActivatedRoute } from '@angular/router';
import { HarryPotterMovieService } from '../../services/harry-potter-movie.service';
import { NgIf, CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TransformHourPipe } from '../../pipes/transform-hour.pipe';
import { MoneyFormatPipe } from '../../pipes/money-format.pipe';

@Component({
  selector: 'hp-movie-detail',
  standalone: true,
  imports: [NgIf, HttpClientModule, CurrencyPipe, RouterModule, TransformHourPipe, MoneyFormatPipe],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute, private HPMovieService: HarryPotterMovieService) {}

  ngOnInit(): void {
    const identifier : string | null = this.route.snapshot.paramMap.get('id') ;
    if(identifier){
      this.HPMovieService.getMovieById(identifier).subscribe(movie => {
        this.movie = movie;
      });
    }
  }
}
