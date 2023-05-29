import { Component } from '@angular/core';
import { Miembro } from '../../interfaces/miembro.interface';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styles: [
  ]
})
export class MembersComponent {
  miembros: Miembro[] = [];
}
