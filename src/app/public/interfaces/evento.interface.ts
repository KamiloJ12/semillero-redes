import { Administrador } from "../../admin/interfaces/administrador.interface";
import { Etiqueta } from "./etiqueta.interface";

export interface Evento {
    titulo:                     string;
    imagen:                     string;
    descripcion:                string;
    fecha_inicio:               Date;
    fecha_fin:                  Date;
    fecha_inicio_inscripcion:   Date;
    fecha_fin_inscripcion:      Date;
    divulgador:                 Administrador;
    tags?:                      Etiqueta[];
    estado:                     'Activo' | 'Inactivo';
    createdAt:                  Date;
    updatedAt:                  Date;
}