import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { ApiService } from '../users/api.service';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements AfterViewInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private animationCtrl: AnimationController,
    private apiService: ApiService,
    private storage: Storage,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
    });

    this.initStorage();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animateFormContainer();
    }, 100);
  }

  private async initStorage() {
    await this.storage.create();
  }

  private animateFormContainer() {
    const formContainer = document.querySelector('.form-container') as HTMLElement | null;
    if (formContainer) {
      console.log('Form container found');
      const animation = this.animationCtrl
        .create()
        .addElement(formContainer)
        .duration(1000)
        .fromTo('opacity', '0', '1')
        .afterAddClass('show-form');
  
      animation.play().then(() => {
        console.log('Animation played');
      });
    } else {
      console.error('Elemento .form-container no encontrado');
    }
  }
  
  async onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.apiService.login(username, password).subscribe(
        async (response) => {
          if (response.success) {
            await this.apiService.registerSession(username).toPromise();
            await this.storage.set('username', username);
            const navigationExtras = {
              state: {
                user: username,
              },
            };
            this.router.navigateByUrl('/game-store', navigationExtras).then(() => {
              this.animateFormContainer();
              this.authService.login(response.user); // Pasar el objeto de usuario al servicio AuthService
            });
          } else {
            console.error('Login fallido:', response.message);
          }
        },
        (error) => {
          console.error('Error en la solicitud de login:', error);
        }
      );
    }
  }
  
}