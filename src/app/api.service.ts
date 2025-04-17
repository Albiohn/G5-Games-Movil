// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3001'; // Asegúrate de que esta URL coincida con la ruta de tu servidor

  constructor(private http: HttpClient) {}

  getVideos(page: number = 1): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/videos?page=${page}`);
  }
}
