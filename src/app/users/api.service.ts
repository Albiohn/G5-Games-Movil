import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3001'; // 

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  checkSession(): Observable<any> {
    return this.http.get(`${this.apiUrl}/session`);
  }

  registerSession(username: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register-session`, { username });
  }

  logout(username: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, { username });
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password });
  }
  
}
