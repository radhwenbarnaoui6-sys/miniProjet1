import { Routes } from '@angular/router';
import { Movies } from './movies/movies';
import { AddMovie } from './add-movie/add-movie';
import { UpdateMovie } from './update-movie/update-movie';
import { RechercheParGenre } from './recherche-par-genre/recherche-par-genre';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { adminGuard } from './guards/admin.guard';



export const routes: Routes = [
    {path: "movies", component : Movies},
    {path: "add-movie", component : AddMovie, canActivate: [adminGuard]},
    {path: "updateMovie/:id", component: UpdateMovie, canActivate: [adminGuard]},
    {path: "rechercheParGenre", component : RechercheParGenre},
    {path: "rechercheParNom", component: RechercheParNom},
    {path: 'login', component: Login},
    {path: 'forbidden', component: Forbidden},
    {path: "", redirectTo: "movies", pathMatch: "full"}
];
