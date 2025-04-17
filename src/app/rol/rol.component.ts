import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../juego.service';
import { CarritoService } from '../carro.service'; // Importa el servicio del carrito

interface Juego {
  id: number;
  nombre: string;
  categoriaId: number;
}

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent implements OnInit {
  juegosRol: any[] = [];

  constructor(
    private juegoService: JuegoService,
    private carroService: CarritoService // Inyecta el servicio del carrito
  ) { }

  ngOnInit(): void {
    this.getJuegosPorCategoria(3); // Id de la categoría para Rol
  }

  getJuegosPorCategoria(categoriaId: number): void {
    this.juegoService.getJuegosPorCategoria(categoriaId)
      .subscribe((juegos: any[]) => {
        this.juegosRol = juegos;
      });
  }

  addToCart(juego: any) {
    this.carroService.addToCart(juego); // Agregar el juego al carrito usando el servicio
  }
}
