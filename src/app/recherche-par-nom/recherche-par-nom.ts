import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../model/movie.model';
import { MovieService } from '../services/movie.service';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.html',
})
export class RechercheParNom implements OnInit {
  movies: Movie[] = [];
  allMovies: Movie[] = [];
  searchTerm = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.allMovies = this.movieService.listeMovies();
    this.movies = this.allMovies;
  }

  // Recherche par bouton :
  // rechercherMovies(): void {
  //   const term = this.nomMovie.trim().toLocaleLowerCase();
  //   this.movies = term
  //     ? this.allMovies.filter(movie => (movie.titreMovie ?? '').toLocaleLowerCase().includes(term))
  //     : this.allMovies;
  // }

  // Recherche avec keyup :
  // onKeyUp(filterText: string): void {
  //   const term = filterText.trim().toLocaleLowerCase();
  //   this.movies = this.allMovies.filter(movie => (movie.titreMovie ?? '').toLocaleLowerCase().includes(term));
  // }
}
