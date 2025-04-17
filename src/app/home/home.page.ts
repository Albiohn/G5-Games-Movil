import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private authService: AuthService) {} //  servicio de autenticación

  ngOnInit() {}

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  isLoggedIn(): boolean { // método para verificar si el usuario está autenticado
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    // Redirige a la página de inicio de sesión 
    this.router.navigate(['/login']);
  }
}




