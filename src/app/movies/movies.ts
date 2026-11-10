import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MovieService } from '../services/movie.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-movies',
  imports: [CommonModule, RouterLink],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies implements OnInit {
  movies! : Movie[]; //un tableau de Movie
  constructor(
    private movieService: MovieService,
    public authService: AuthService,
  ) {
    this.movies = movieService.listeMovies();
  }

  ngOnInit() {
  }

  supprimerMovie(f: Movie)
  {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.movieService.supprimerMovie(f);
  }
}


