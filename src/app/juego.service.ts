import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria} from '../models';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getJuegos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/juegos`);
  }

  addJuego(juego: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/juegos`, juego);
  }

  updateJuego(id: number, juego: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/juegos/${id}`, juego);
  }

  deleteJuego(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/juegos/${id}`);
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.apiUrl}/categorias`);
  } 

  getJuegosPorCategoria(categoriaId: number): Observable<any[]> {
    const url = `${this.apiUrl}/juegos/categoria/${categoriaId}`; // Ajustar la URL según la ruta del servidor
    return this.http.get<any[]>(url);
  }

}
