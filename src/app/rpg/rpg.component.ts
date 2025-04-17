import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../juego.service';
import { CarritoService } from '../carro.service'; // Importa el servicio del carrito

interface Juego {
  id: number;
  nombre: string;
  categoriaId: number;
}

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.scss']
})
export class RPGComponent implements OnInit {
  juegosRPG: any[] = [];

  constructor(
    private juegoService: JuegoService,
    private carroService: CarritoService // Inyecta el servicio del carrito
  ) { }

  ngOnInit(): void {
    this.getJuegosPorCategoria(4); // Id de la categoría para RPG
  }

  getJuegosPorCategoria(categoriaId: number): void {
    this.juegoService.getJuegosPorCategoria(categoriaId)
      .subscribe((juegos: any[]) => {
        this.juegosRPG = juegos;
      });
  }

  addToCart(juego: any) {
    this.carroService.addToCart(juego); // Agregar el juego al carrito usando el servicio
  }
}
