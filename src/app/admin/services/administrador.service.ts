import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from 'src/app/admin/interfaces/administrador.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  private baseUrl: string = `${environment.apiBaseUrl}/administradores`;

  constructor(private http: HttpClient) { }

  getAdministradorById(id:number):Observable<Administrador> {
    /* const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `x-${token}`); */
    return this.http.get<Administrador>(`${this.baseUrl}/${id}`);/* , { headers } */
  }
}
