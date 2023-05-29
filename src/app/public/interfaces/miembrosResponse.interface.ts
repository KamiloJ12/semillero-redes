import { Miembro } from "./miembro.interface";

export interface MiembroResponse {
    total: number;
    miembros: Miembro[];   
}