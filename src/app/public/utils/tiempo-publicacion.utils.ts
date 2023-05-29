import * as moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

export function calcularTiempoPublicacion(fechaPublicacion: Date): string {
    const fechaActual = moment();
    const fechaPublicacionMoment = moment(fechaPublicacion);
    const tiempoTranscurrido = fechaPublicacionMoment.diff(fechaActual, 'minutes');
    const tiempoFormateado = moment.duration(tiempoTranscurrido, 'minutes').humanize(true);
    return tiempoFormateado;
}