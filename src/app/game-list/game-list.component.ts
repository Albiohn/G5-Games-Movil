import { Component, OnInit } from '@angular/core';
import { RawgService } from '../services/rawg.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games: any[] = [];
  totalPages: number = 20; // Ajustado a 20 páginas como máximo
  currentPage: number = 1;
  pageSize: number = 40; // Cantidad de juegos por página
  pagesArray: number[] = [];
  showNextButton: boolean = false; // Para mostrar u ocultar el botón de "Siguiente"
  showPreviousButton: boolean = false; // Para mostrar u ocultar el botón de "Anterior"

  constructor(private rawgService: RawgService) {}

  ngOnInit() {
    this.rawgService.getFirstPageOfGames().subscribe(
      (data: any) => {
        // Asegúrate de que `data` tenga la estructura esperada
        if (data && Array.isArray(data.results)) {
          this.games = data.results;
          this.totalPages = Math.min(20, Math.ceil(data.count / this.pageSize)); // Limitar a 20 páginas máximo
          this.pagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1); // Crear array del 1 al totalPages
          this.showNextButton = this.currentPage < this.totalPages; // Mostrar el botón de "Siguiente" si hay más páginas
          this.showPreviousButton = this.currentPage > 1; // Mostrar el botón de "Anterior" si no es la primera página
        } else {
          this.games = []; // Asegurarse de que games siempre sea un array
        }
      },
      error => {
        console.error('Error fetching games:', error);
        this.games = []; // Asegurarse de que games siempre sea un array
      }
    );
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadPage(this.currentPage); // Cargar la siguiente página
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPage(this.currentPage); // Cargar la página anterior
    }
  }

  getGenres(game: any): string {
    return game.genres.map((genre: any) => genre.name).join(', ');
  }

  getPlatforms(game: any): string {
    return game.platforms.map((platform: any) => platform.platform.name).join(', ');
  }

  loadPage(page: number) {
    this.rawgService.getGames(page, this.pageSize).subscribe(
      (data: any) => {
        // Asegúrate de que `data` tenga la estructura esperada
        if (data && Array.isArray(data.results)) {
          this.games = data.results;
          this.totalPages = Math.min(20, Math.ceil(data.count / this.pageSize)); // Limitar a 20 páginas máximo
          this.pagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1); // Crear array del 1 al totalPages
          this.showNextButton = this.currentPage < this.totalPages; // Mostrar el botón de "Siguiente" si hay más páginas
          this.showPreviousButton = this.currentPage > 1; // Mostrar el botón de "Anterior" si no es la primera página
        } else {
          this.games = []; // Asegurarse de que games siempre sea un array
        }
      },
      error => {
        console.error('Error fetching games:', error);
        this.games = []; // Asegurarse de que games siempre sea un array
      }
    );
  }
}
