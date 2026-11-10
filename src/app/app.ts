import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'Mes Movies';

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.restoreSession();
  }

  onLogout(): void {
    this.authService.logout();
  }
}
