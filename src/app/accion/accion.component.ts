import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../juego.service';
import { CarritoService } from '../carro.service'; // Importa el servicio del carrito

interface Juego {
  id: number;
  nombre: string;
  categoriaId: number;
}

@Component({
  selector: 'app-accion',
  templateUrl: './accion.component.html',
  styleUrls: ['./accion.component.scss']
})
export class AccionComponent implements OnInit {
  juegosAccion: any[] = [];

  constructor(
    private juegoService: JuegoService,
    private carroService: CarritoService // Inyecta el servicio del carrito
  ) { }

  ngOnInit(): void {
    this.getJuegosPorCategoria(1); // Id de la categoría
  }

  getJuegosPorCategoria(categoriaId: number): void {
    this.juegoService.getJuegosPorCategoria(categoriaId)
      .subscribe((juegos: any[]) => {
        this.juegosAccion = juegos;
      });
  }

  addToCart(juego: any) {
    this.carroService.addToCart(juego); // Agregar el juego al carrito usando el servicio
  }
}
