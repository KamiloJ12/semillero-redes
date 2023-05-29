import { Component } from '@angular/core';
import { Semillero } from '../../interfaces/semillero.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {
  
  semillero: Semillero = {
    id: 1,
    mision: '',
    vision: '',
    facebook: 'asdsd',
    youtube: 'asdasd',
    gmail: 'asdad',
    twitter: 'asddd',
    github: 'sas'
  }
}
