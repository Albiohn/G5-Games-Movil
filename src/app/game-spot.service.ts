// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameSpotService{
  private readonly API_KEY = 'fed2b26e280a9f34b5a93d9dbb3d2677c446d2ed';
  private readonly BASE_URL = 'http://www.gamespot.com/api/videos/';

  constructor(private http: HttpClient) {}

  getVideos(page: number = 1): Observable<any[]> {
    const url = `${this.BASE_URL}?api_key=${this.API_KEY}&format=json&limit=25&sort=publish_date:desc&page=${page}`;
    return this.http.get<any[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error en la solicitud de videos:', error);
    return throwError('Error al obtener videos. Por favor, inténtelo de nuevo más tarde.');
  }
}
