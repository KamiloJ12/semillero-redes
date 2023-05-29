import { Component } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'semillero';

  constructor( private primengConfig: PrimeNGConfig ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.primengConfig.setTranslation({
      startsWith:	'Comienza con',
      contains:	'Contiene',
      notContains:	'No contiene',
      endsWith:	'Termina con',
      equals:	'Igual',
      notEquals:	'No es igual',
      noFilter:	'Sin filtro',
      lt:	'Menor que',
      lte:	'Menor que o igual a',
      gt:	'Mayor que',
      gte:	'Mayor que o igual a',
      is:	'Es',
      isNot:	'No es',
      before:	'Antes',
      after:	'Despues',
      dateIs:	'La fecha es',
      dateIsNot:	'La fecha no es',
      dateBefore:	'La fecha es anterior',
      dateAfter:	'La fecha es despues',
      clear:	'Limpiar',
      apply:	'Aplicar',
      matchAll:	'Concidir con todos',
      matchAny:	'Concidir con algunos',
      addRule:	'Agregar regla',
      removeRule:	'Remover regla',
      accept:	'Si',
      reject:	'No',
      choose:	'Elegir',
      upload:	'Subir',
      cancel:	'Cancelar',
      dayNames:	["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
      dayNamesShort:	["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
      dayNamesMin:	["Do","Lu","Ma","Mi","Ju","Vi","Sa"],
      monthNames:	["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
      monthNamesShort:	["Ene", "Feb", "Mar", "Abr", "May", "Jun","Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      dateFormat:	'dd/mm/yy',
      firstDayOfWeek:	0,
      today:	'Hoy',
      weekHeader:	'Wk',
      weak:	'Debil',
      medium:	'Medio',
      strong:	'Fuerte',
      passwordPrompt:	'Ingrese una contraseña',
      emptyMessage:	'No se han encontrado resultados',
      emptyFilterMessage:	'No se han encontrado resultados'
    });
  }
}
