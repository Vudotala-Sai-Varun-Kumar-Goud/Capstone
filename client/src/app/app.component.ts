import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Event Management System';
  roleName: string | null = '';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    // FIX: Added parentheses to call the function correctly
    this.roleName = this.authService.getRole();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}