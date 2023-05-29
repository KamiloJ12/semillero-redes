import { Component, Input } from '@angular/core';
import { Miembro } from '../../interfaces/miembro.interface';

@Component({
  selector: 'app-miembro-card',
  templateUrl: './miembro-card.component.html',
  styles: [
  ]
})
export class MiembroCardComponent {
  @Input() miembro!: Miembro;
}
