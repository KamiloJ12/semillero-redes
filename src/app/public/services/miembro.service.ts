import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Miembro } from '../interfaces/miembro.interface';
import { MiembroResponse } from '../interfaces/miembrosResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class MiembroService {

  private baseUrl: string = `${environment.apiBaseUrl}/miembros`;

  constructor(private http: HttpClient) { }

  getMiembros():Observable<MiembroResponse> {
    /* const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `x-${token}`); */
    return this.http.get<MiembroResponse>(`${this.baseUrl}/`);/* , { headers } */
  }

  /* desactivate(id: number): Observable<Usuario> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.put<Usuario>(`${this.baseUrl}/${id}/desactivate`, {}, { headers });
  }

  updateMiembro(id: number, miembro: FormData): Observable<Usuario> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.put<Usuario>(`${this.baseUrl}/${id}`, miembro, { headers });
  }
  
  addMiembro(miembro: FormData): Observable<Usuario> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.post<Usuario>(`${this.baseUrl}/`, miembro, { headers });
  } */
}
