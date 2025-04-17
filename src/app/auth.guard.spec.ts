import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule para configurar las pruebas de enrutamiento
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Router } from '@angular/router'; 


describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule], // Importa RouterTestingModule para configurar las pruebas de enrutamiento
      providers: [AuthGuard, AuthService] // Agrega AuthGuard y AuthService como proveedores
    });

    authGuard = TestBed.inject(AuthGuard); // Obtiene una instancia del AuthGuard
    authService = TestBed.inject(AuthService); // Obtiene una instancia del AuthService
    router = TestBed.inject(Router); // Obtiene una instancia del Router (opcional, solo si lo necesitas)
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy(); // Verifica que el AuthGuard se haya creado correctamente
  });

  // Aquí puedes añadir más pruebas específicas para el comportamiento del AuthGuard
});
