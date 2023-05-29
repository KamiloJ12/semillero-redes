import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap, map, catchError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LoginResponse } from '../interfaces/loginResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = `${environment.apiBaseUrl}/auth`;
  private user?: LoginResponse;

  constructor(private http: HttpClient) { }

  get currentUser(): LoginResponse|undefined {
    if( !this.user ) return undefined;
    return structuredClone(this.user);
  }

  checkAuthentication(): Observable<boolean> { 
    if( !localStorage.getItem('token')) return of(false);
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders().set('Authorization', `${token}`); // Coloca el token en los encabezados de la solicitud
    return this.http.get<LoginResponse>(`${this.baseUrl}/verify-token`, { headers })
      .pipe(
        tap( user => this.user = user ),
        map( user => !!user ),
        catchError( err => of(false) )
      );
  }

  login( correo: string, password: string ): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, {correo, password})
      .pipe(
        tap( user => this.user = user ),
        tap( user => localStorage.setItem('token', user.token) )
      );
  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }
}
