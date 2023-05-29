import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Administrador } from 'src/app/admin/interfaces/administrador.interface';

import { AuthService } from '../../services/auth.service';
import { AdministradorService } from '../../services/administrador.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  hideMenu: boolean = false;
  usuario!: Administrador;
  ruta: string = `${environment.apiBaseUrl}/uploads/administrador`;
  menu: MenuItem[] = [
    {
      label: 'Hogar',
      icon: 'pi pi-home',
      routerLink: '/admin/inicio'
    },
    {
      label: 'Miembros',
      icon: 'pi pi-users',
      routerLink: '/admin/miembros'
    },
    {
      label: 'Eventos',
      icon: 'pi pi-calendar-minus',
      routerLink: '/admin/eventos'
    },
    {
      label: 'Proyectos',
      icon: 'pi pi-briefcase',
      routerLink: '/admin/proyectos'
    }
  ];

  constructor( private authService: AuthService, private administradorService: AdministradorService ) {}

  ngOnInit(): void {
    alert(this.authService.currentUser!.usuario.id);
    this.administradorService.getAdministradorById(this.authService.currentUser!.usuario.id)
      .subscribe( (usuario: Administrador) => this.usuario = usuario ); 
  }
}
