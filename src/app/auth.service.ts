import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false;
  private usuarioSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  login(usuario: any): void {
    // Lógica de inicio de sesión (puedes implementarla según tus necesidades)
    this.isAuthenticated = true;
    // Establecer los detalles del usuario según la información del usuario que ha iniciado sesión
    this.usuarioSubject.next(usuario);
  }

  logout(): void {
    // Lógica de cierre de sesión (puedes implementarla según tus necesidades)
    this.isAuthenticated = false;
    this.usuarioSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUsuarioObservable(): Observable<any> {
    return this.usuarioSubject.asObservable();
  }
}
