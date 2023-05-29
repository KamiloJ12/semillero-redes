import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: [
    `
      :host ::ng-deep .p-carousel-prev {
        position: absolute;
        top: 50%; 
        left: 0%;
        transform: translateY(-50%); 
        z-index: 1; 
      }

      :host ::ng-deep .p-carousel-next {
        position: absolute;
        top: 50%;
        right: 0%;
        transform: translateY(-50%); 
        z-index: 1; 
      }

      :host ::ng-deep .p-carousel-indicators {
        position: absolute;
        top: 97%;
        right: 50%;
        transform: translate(50%, -97%); 
        z-index: 1; 
      }

      .caption {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      /* .title-slide, .text-slide, .button-slide {
        position: absolute;
      }
      
      .title-slide {
        top: 45%;
        transform: translateY(-45%); 
      }

      .text-slide {
        top: 55%;
        transform: translateY(-45%);
      }
      
      .button-slide {
        top: 55%;
        transform: translateY(-45%);
      } */
      
    `
  ]
})
export class CarouselComponent {
  slides = [
    {
      tipo: 'imagen',
      datos: 'https://images.squarespace-cdn.com/content/v1/547740d3e4b0a3a6c5b6daa4/1585309567954-FYB1AS3WQN3DGZDQFIWS/Webinar+3+Application+Performance+.jpg?format=1000w'
    },
    {
      tipo: 'imagen',
      datos: 'https://images.squarespace-cdn.com/content/v1/547740d3e4b0a3a6c5b6daa4/1585309569065-CMWS2I9HNE2UMJWZL20Z/Webinar+4+Application+Security.jpg?format=1000w'
    },
    {
      tipo: 'imagen',
      datos: 'https://images.squarespace-cdn.com/content/v1/547740d3e4b0a3a6c5b6daa4/1585309562182-CSL0CEJT4OBQL4D3V828/Webinar+2+ACI+Cloud.jpg?format=1000w'
    },
    {
      tipo: 'imagen',
      datos: 'https://images.squarespace-cdn.com/content/v1/547740d3e4b0a3a6c5b6daa4/1585309563731-JYOIF9OMNTRKMUHPFP89/Webinar+1+Platform+Modernization.jpg?format=1000w'
    },
    {
      tipo: 'imagenTexto',
      datos: {
        imagen: '../../../assets/images/hacker-trabajando-oscuridad.jpg',
        titulo: 'El Cusrso de cisco',
        texto: 'Deseas aprender ciberseguridad?',
        boton: 'Aprender'
      },
      estilos: {
        titulo: 'color: white;',
        texto: 'color: white;',
        boton: 'color: black; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;'
      }
    }
  ];


} 
