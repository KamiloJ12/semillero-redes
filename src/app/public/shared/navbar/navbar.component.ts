import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {
  
  hideMenu: boolean = false;
  menu: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      routerLink: ''
    },
    {
      label: 'Miembros',
      icon: 'pi pi-users',
      routerLink: 'miembros'
    },
    {
      label: 'Eventos',
      icon: 'pi pi-calendar-minus',
      routerLink: 'eventos'
    },
    {
      label: 'Proyectos',
      icon: 'pi pi-briefcase',
      routerLink: 'proyectos'
    }
  ];
}
