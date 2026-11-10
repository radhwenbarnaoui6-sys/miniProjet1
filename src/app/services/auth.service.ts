import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly users: User[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'radhwen', password: '123', roles: ['USER'] },
  ];

  loggedUser = '';
  isLoggedIn = false;
  private roles: string[] = [];

  constructor(private router: Router) {}

  signIn(user: User): boolean {
    const authenticatedUser = this.users.find(
      (currentUser) =>
        currentUser.username === user.username && currentUser.password === user.password,
    );

    if (!authenticatedUser) {
      return false;
    }

    this.setAuthenticatedUser(authenticatedUser);
    return true;
  }

  logout(): void {
    this.clearSession();
    this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    return this.roles.includes('ADMIN');
  }

  restoreSession(): boolean {
    const username = localStorage.getItem('loggedUser');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = this.users.find((currentUser) => currentUser.username === username);

    if (!isLoggedIn || !user) {
      this.clearSession();
      return false;
    }

    this.setAuthenticatedUser(user);
    return true;
  }

  private setAuthenticatedUser(user: User): void {
    this.loggedUser = user.username;
    this.roles = user.roles;
    this.isLoggedIn = true;
    localStorage.setItem('loggedUser', this.loggedUser);
    localStorage.setItem('isLoggedIn', 'true');
  }

  private clearSession(): void {
    this.loggedUser = '';
    this.roles = [];
    this.isLoggedIn = false;
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('isLoggedIn');
  }
}
