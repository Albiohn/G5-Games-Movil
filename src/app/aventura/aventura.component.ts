import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../juego.service';
import { CarritoService } from '../carro.service'; // Importa el servicio del carrito

interface Juego {
  id: number;
  nombre: string;
  categoriaId: number;
}

@Component({
  selector: 'app-aventura',
  templateUrl: './aventura.component.html',
  styleUrls: ['./aventura.component.scss']
})
export class AventuraComponent implements OnInit {
  juegosAventura: any[] = [];

  constructor(
    private juegoService: JuegoService,
    private carroService: CarritoService // Inyecta el servicio del carrito
  ) { }

  ngOnInit(): void {
    this.getJuegosPorCategoria(2); // Id de la categoría para Aventura
  }

  getJuegosPorCategoria(categoriaId: number): void {
    this.juegoService.getJuegosPorCategoria(categoriaId)
      .subscribe((juegos: any[]) => {
        this.juegosAventura = juegos;
      });
  }

  addToCart(juego: any) {
    this.carroService.addToCart(juego); // Agregar el juego al carrito usando el servicio
  }
}
