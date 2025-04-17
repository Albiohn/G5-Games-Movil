import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  items: any[] = [];
  juegos: any[] = [];

  addToCart(juego: any) {
    this.items.push(juego);
    this.juegos.push(juego); // Agregar el juego al arreglo de juegos
  }

  removeFromCart(index: number) {
    this.items.splice(index, 1);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }
}