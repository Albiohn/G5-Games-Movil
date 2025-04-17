import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../carro.service'; // Importacion del servicio del carrito

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage {
  compraExitosa = false;

  constructor(private router: Router, private carroService: CarritoService) {}

  // Obténer los elementos del carrito del servicio
  get items() {
    return this.carroService.getItems();
  }

  removeItem(index: number) {
    this.carroService.removeFromCart(index);
  }

  checkout() {
    // Vaciar el carrito
    this.carroService.clearCart();
    // Mostrar mensaje de compra exitosa
    this.compraExitosa = true;
    // Redirigir al usuario al inicio después de 3 segundos
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000);
  }
}
