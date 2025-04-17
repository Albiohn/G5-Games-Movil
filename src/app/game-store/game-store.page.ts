import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { CarritoService } from '../carro.service'; // importacion del servicio

@Component({
  selector: 'app-game-store',
  templateUrl: './game-store.page.html',
  styleUrls: ['./game-store.page.scss']
})
export class GameStorePage implements AfterViewInit {

  constructor(
    private router: Router,
    private animationCtrl: AnimationController,
    private CarroService: CarritoService // Inyeccion del servicio del carrito
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      const categoryList = document.querySelector('.category-list') as HTMLElement | null;
      if (categoryList) {
        const animation = this.animationCtrl
          .create()
          .addElement(categoryList)
          .duration(1000)
          .fromTo('opacity', '0', '1');

        animation.play();
      } else {
        console.error('Elemento .category-list no encontrado');
      }
    }, 100); // Ajuste de el retraso según sea necesario
  }

  navigateToLogin() {
    this.router.navigate(['/login']); // redirección al login
  }

  navigateToHome() {
    this.router.navigate(['/home']); // redirección al inicio
  } 

  navigateToCategory(category: string) {
    this.router.navigate([`/${category}`]);
  }

  addToCart(juego: any) {
    this.CarroService.addToCart(juego); // Agregar el juego al carrito usando el servicio
  }
}
