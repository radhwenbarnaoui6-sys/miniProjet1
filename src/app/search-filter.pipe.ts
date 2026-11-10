import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './model/movie.model';

@Pipe({ name: 'searchFilter', 
  standalone: true }
)
export class SearchFilterPipe implements PipeTransform {
  transform(movies: Movie[] | null | undefined, filterText: string | null | undefined): Movie[] {
    const search = (filterText ?? '').trim().toLocaleLowerCase();
    if (!movies) return [];
    if (!search) return movies;
    return movies.filter(movie => (movie.titreMovie ?? '').toLocaleLowerCase().includes(search));
  }
}
