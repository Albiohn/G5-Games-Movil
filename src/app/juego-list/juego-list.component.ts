import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../juego.service';

interface Juego {
  id: number | null;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number | null;
  imagen:string;
}

@Component({
  selector: 'app-juego-list',
  templateUrl: './juego-list.component.html',
  styleUrls: ['./juego-list.component.scss'],
})
export class JuegoListComponent implements OnInit {
  juegos: any[] = [];
  newJuego: Juego = { id: null, nombre: '', categoria: '', descripcion: '', precio: null, imagen:'' };
  editJuego: Juego = { id: null, nombre: '', categoria: '', descripcion: '', precio: null, imagen:'' };

  constructor(private juegoService: JuegoService) {}

  ngOnInit() {
    this.loadJuegos();
  }

  loadJuegos() {
    this.juegoService.getJuegos().subscribe(data => {
      this.juegos = data;
    });
  }

  addJuego() {
    this.juegoService.addJuego(this.newJuego).subscribe(() => {
      this.loadJuegos();
      this.newJuego = { id: null, nombre: '', categoria: '', descripcion: '', precio: null, imagen: '' };
    });
  }

  updateJuego() {
    if (this.editJuego.id !== null) {
      this.juegoService.updateJuego(this.editJuego.id, this.editJuego).subscribe(() => {
        this.loadJuegos();
        this.editJuego = { id: null, nombre: '', categoria: '', descripcion: '', precio: null, imagen: '' };
      });
    } else {
      // Manejo del caso cuando el ID es nulo
    }
  }

  deleteJuego(id: number) {
    this.juegoService.deleteJuego(id).subscribe(() => {
      this.loadJuegos();
    });
  } 

  loadJuegosPorCategoria(categoriaId: number) {
    this.juegoService.getJuegosPorCategoria(categoriaId).subscribe(data => {
      this.juegos = data;
    });
  }
  

  edit(juego: Juego) {
    this.editJuego = { ...juego };
  }
}


