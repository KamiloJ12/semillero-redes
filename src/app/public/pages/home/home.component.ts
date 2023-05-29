import { Component, OnInit } from '@angular/core';
import { Evento } from '../../interfaces/evento.interface';

import { calcularTiempoPublicacion } from '../../utils/tiempo-publicacion.utils';
import { obtenerColorFondoAleatorio } from '../../utils/color.util';
import { Proyecto } from '../../interfaces/proyecto.interface';
import { Miembro } from '../../interfaces/miembro.interface';
import { MiembroService } from '../../services/miembro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  semillero = {
    vision: `El semillero de Investigación SIREDSE será reconocido a nivel local, regional, y 
    nacional  por el fortatelicimiento de la cultura investigativa, la investigación  
    y la participación en eventos académicos y redes de investigación similares en el 
    área de las Redes Computacionales y Seguridad informática.`,
    mision: `El Semillero de investigación en Redes de Computadores y Seguridad Informática 
    es un equipo conformado por docentes y estudiantes, comprometidos con la formación 
    misional de la investigación, la cultura investigativa y la calidad académica mediante 
    la generación de un ambiente de trabajo en equipo alrededor de la búsquedas de soluciones 
    a problemáticas relacionadas con la redes y la seguridad informática integrados a las TIC y 
    la Sociedad.`
  };

  eventos: Evento[] = [
    {
      titulo: 'Circumpolar Cooperation',
      imagen: 'https://blocks.primeng.org/assets/images/blocks/blog/blog-9.png',
      descripcion: 'Purus sit amet volutpat consecuente mauris nunc congue. Odio pellentesque diam volutpato commodo sed egestas egestas fringilla phapellus. ',
      fecha_inicio: new Date(),
      fecha_fin: new Date,
      fecha_inicio_inscripcion: new Date,
      fecha_fin_inscripcion: new Date,
      divulgador: {
        id: 2,
        nombre: 'Gabriel Leal',
        imagen: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        correo: 'gabriel@gmail.com',
        celular: 312541022,
        identificacion: 35220142,
        codigo: 1151852,
        rol: 'Administrador',
        estado: 'Activo',
      },
      tags: [
        {
          id: 1,
          nombre: 'Poles'
        },
        {
          id: 2,
          nombre: 'Nature'
        }
      ],
      estado: 'Activo',
      createdAt: new Date('2020-08-27T08:00:00.000Z'),
      updatedAt: new Date()
    },
    {
      titulo: 'Circumpolar Cooperation',
      imagen: 'https://blocks.primeng.org/assets/images/blocks/blog/blog-9.png',
      descripcion: 'Purus sit amet volutpat consecuente mauris nunc congue. Odio pellentesque diam volutpato commodo sed egestas egestas fringilla phapellus. ',
      fecha_inicio: new Date(),
      fecha_fin: new Date,
      fecha_inicio_inscripcion: new Date,
      fecha_fin_inscripcion: new Date,
      divulgador: {
        id: 2,
        nombre: 'Gabriel Leal',
        imagen: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        correo: 'gabriel@gmail.com',
        celular: 312541022,
        identificacion: 35220142,
        codigo: 1151852,
        rol: 'Administrador',
        estado: 'Activo',
      },
      tags: [
        {
          id: 1,
          nombre: 'Poles'
        },
        {
          id: 2,
          nombre: 'Nature'
        }
      ],
      estado: 'Activo',
      createdAt: new Date('2020-08-27T08:00:00.000Z'),
      updatedAt: new Date()
    }
  ];

  miembros: Miembro[] = [
    {
      id: 2,
      nombre: 'Brayan Ricardo Macias Lazaro',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvAUlwYkbAYnrzpSttn0zt8cxuZkp_WRRM_r7XPWahnwYhBsB6wgFRuj1Ajg1-42y4Yw8',
      correo: 'brayanricardoml@fups.edu.co',
      celular: 3015201458,
      identificacion: 1520445120,
      codigo: 1151746,
      edad: 26,
      direccion: 'Av 18 # 25 - 44 Motilones',
      semestre_actual: 11,
      estado: 'Activo',
    },
    {
      id: 2,
      nombre: 'Brayan Ricardo Macias Lazaro',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvAUlwYkbAYnrzpSttn0zt8cxuZkp_WRRM_r7XPWahnwYhBsB6wgFRuj1Ajg1-42y4Yw8',
      correo: 'brayanricardoml@fups.edu.co',
      celular: 3015201458,
      identificacion: 1520445120,
      codigo: 1151746,
      edad: 26,
      direccion: 'Av 18 # 25 - 44 Motilones',
      semestre_actual: 11,
      estado: 'Activo',
    },
    {
      id: 2,
      nombre: 'Brayan Ricardo Macias Lazaro',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvAUlwYkbAYnrzpSttn0zt8cxuZkp_WRRM_r7XPWahnwYhBsB6wgFRuj1Ajg1-42y4Yw8',
      correo: 'brayanricardoml@fups.edu.co',
      celular: 3015201458,
      identificacion: 1520445120,
      codigo: 1151746,
      edad: 26,
      direccion: 'Av 18 # 25 - 44 Motilones',
      semestre_actual: 11,
      estado: 'Activo',
    },
    {
      id: 2,
      nombre: 'Brayan Ricardo Macias Lazaro',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvAUlwYkbAYnrzpSttn0zt8cxuZkp_WRRM_r7XPWahnwYhBsB6wgFRuj1Ajg1-42y4Yw8',
      correo: 'brayanricardoml@fups.edu.co',
      celular: 3015201458,
      identificacion: 1520445120,
      codigo: 1151746,
      edad: 26,
      direccion: 'Av 18 # 25 - 44 Motilones',
      semestre_actual: 11,
      estado: 'Activo',
    }
  ];

  proyectos: Proyecto[] = [
    {
      nombre: 'Evento 1',
      descripcion: 'asdadadasdasdasdasd asdasdasoinwrmgo rgionc bowns wrinelvoanw wrinckSMvinv a vwrinbab abwbiwnakdvIFNkxm vWVINoainvK v aWOINwkvmaoiaetne naegnvkaiwn rgn r rgnr rgrgrginmakwog rawrpgrkKarg wgpnwrgakm camilo',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      director: 'Pardo',
      divulgador: {
        id: 2,
        nombre: 'Gabriel Leal',
        imagen: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        correo: 'gabriel@gmail.com',
        celular: 312541022,
        identificacion: 35220142,
        codigo: 1151852,
        rol: 'Administrador',
        estado: 'Activo',
      },
      linea_investigacion: '',
      estado: 'Activo',
      equipo: [],
      createdAt: new Date('2020-08-27T08:00:00.000Z'),
      updatedAt: new Date()
    }
  ];

  constructor( private miembroService: MiembroService ) { }

  ngOnInit(): void {
    this.miembroService.getMiembros()
      .subscribe( miembros => this.miembros = miembros.miembros );
  }

  calcularTiempo(fechaPublicacion: Date): string {
    return calcularTiempoPublicacion(fechaPublicacion);
  }

  generarColorAleatorio(): string {
    //obtenerColorFondoAleatorio();
    const color: string = 'red';
    return `bg-${color}-100 text-${color}-600`;
  }

}
