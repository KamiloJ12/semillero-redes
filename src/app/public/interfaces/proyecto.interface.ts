import { Administrador } from "../../admin/interfaces/administrador.interface";
import { Miembro } from "./miembro.interface";

export interface Proyecto {
    nombre:               string;
    descripcion:          string;
    fecha_inicio:         Date;
    fecha_fin:            Date;
    director:             string;
    divulgador:           Administrador;
    linea_investigacion:  string;
    equipo:               Miembro[];
    estado:               'Activo' | 'Inactivo';
    createdAt:            Date;
    updatedAt:            Date;
}