import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; // Importa Router para la navegación

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss'],
})
export class PerfilUsuarioComponent {
  usuario$: Observable<any>; // Observable para almacenar los datos del usuario

  constructor(private authService: AuthService, private router: Router) { 
    // Inicializar usuario$ en el constructor
    this.usuario$ = this.authService.getUsuarioObservable();
  }

  // Método para redirigir al usuario de regreso a la página de inicio
  volverAlInicio() {
    this.router.navigate(['/home']); // Reemplaza '/inicio' con la ruta correcta de tu página de inicio
  }
}
