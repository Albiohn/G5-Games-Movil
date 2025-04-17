import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../juego.service';
import { CarritoService } from '../carro.service';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.scss']
})
export class TerrorComponent implements OnInit {
  juegosTerror: any[] = [];

  constructor(
    private juegoService: JuegoService,
    private carroService: CarritoService
  ) { }

  ngOnInit(): void {
    this.getJuegosPorCategoria(6); // Id de la categoría para Terror
  }

  getJuegosPorCategoria(categoriaId: number): void {
    this.juegoService.getJuegosPorCategoria(categoriaId)
      .subscribe((juegos: any[]) => {
        this.juegosTerror = juegos;
      });
  }

  addToCart(juego: any) {
    this.carroService.addToCart(juego);
  }
}
