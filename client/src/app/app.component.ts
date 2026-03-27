import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Event Management System';
  IsLoggin: boolean = false;
  roleName: string | null = '';

  constructor(public authService: AuthService, private router: Router) {
    this.IsLoggin = this.authService.getLoginStatus();
    this.roleName = this.authService.getRole();
    
    if (!this.IsLoggin) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {}

  logout() {
    this.authService.logout();
    window.location.reload(); // Required by the document
  }
}