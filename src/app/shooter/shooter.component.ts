import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../juego.service';
import { CarritoService } from '../carro.service';

@Component({
  selector: 'app-shooter',
  templateUrl: './shooter.component.html',
  styleUrls: ['./shooter.component.scss']
})
export class ShooterComponent implements OnInit {
  juegosShooter: any[] = [];

  constructor(
    private juegoService: JuegoService,
    private carroService: CarritoService
  ) { }

  ngOnInit(): void {
    this.getJuegosPorCategoria(5); // Id de la categoría para Shooter
  }

  getJuegosPorCategoria(categoriaId: number): void {
    this.juegoService.getJuegosPorCategoria(categoriaId)
      .subscribe((juegos: any[]) => {
        this.juegosShooter = juegos;
      });
  }

  addToCart(juego: any) {
    this.carroService.addToCart(juego);
  }
}

