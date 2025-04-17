import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RawgService {
  private apiKey = 'cc8b1ee3c2ec4034a3dbd68c5d33db6f';
  private baseUrl = `https://api.rawg.io/api/games`;
  private localStorageKey = 'gamesData';
  private localStorageTimestampKey = 'gamesDataTimestamp';
  private expirationTime = 24 * 60 * 60 * 1000; // 1 día en milisegundos
  private pageSize = 40; // Definir pageSize como propiedad privada

  constructor(private http: HttpClient) {}

  getGames(page: number = 1, pageSize: number = 40): Observable<any> {
    const localData = localStorage.getItem(`${this.localStorageKey}_page${page}`);
    const localDataTimestamp = localStorage.getItem(`${this.localStorageTimestampKey}_page${page}`);
    const now = new Date().getTime();

    if (localData && localDataTimestamp && (now - parseInt(localDataTimestamp, 10)) < this.expirationTime) {
      return of(JSON.parse(localData));
    } else {
      return this.fetchGamesFromApi(page, pageSize);
    }
  }

  getFirstPageOfGames(): Observable<any> {
    return this.fetchGamesFromApi(1, this.pageSize);
  }

  private fetchGamesFromApi(page: number, pageSize: number): Observable<any> {
    const url = `${this.baseUrl}?key=${this.apiKey}&page=${page}&page_size=${pageSize}`;
    return this.http.get<any>(url).pipe(
      tap(response => {
        // Guardar toda la respuesta para evitar problemas de estructura
        localStorage.setItem(`${this.localStorageKey}_page${page}`, JSON.stringify(response));
        localStorage.setItem(`${this.localStorageTimestampKey}_page${page}`, new Date().getTime().toString());
      })
    );
  }
}
