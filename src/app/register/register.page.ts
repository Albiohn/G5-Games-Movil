import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { ApiService } from '../users/api.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  private _storage: Storage | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private animationCtrl: AnimationController,
    private apiService: ApiService,
    private storage: Storage
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
    });

    this.initStorage();
  }

  ngOnInit() {
    this.animateFormContainer();
  }

  private async initStorage() {
    this._storage = await this.storage.create();
  }

  private animateFormContainer() {
    setTimeout(() => {
      const formContainer = document.querySelector('.form-container') as HTMLElement | null;
      if (formContainer) {
        const animation = this.animationCtrl
          .create()
          .addElement(formContainer)
          .duration(1000)
          .fromTo('opacity', '0', '1')
          .afterAddClass('show-form'); 
  
        animation.play();
      } else {
        console.error('Elemento .form-container no encontrado');
      }
    }, 100);
  }
  
  async onRegister() {
    if (this.registerForm.valid) {
      const { username, password } = this.registerForm.value;
      this.apiService.register(username, password).subscribe(
        async (response) => {
          if (response.success) {
            await this.apiService.registerSession(username).toPromise();
            await this.storage.set('username', username);
            // Redireccionar al usuario a la página de inicio de sesión (login)
            this.router.navigateByUrl('/login').then(() => {
              this.animateFormContainer();
            });
          } else {
            console.error('Registro fallido:', response.message);
          }
        },
        (error) => {
          console.error('Error en la solicitud de registro:', error);
        }
      );
    }
  }
}
