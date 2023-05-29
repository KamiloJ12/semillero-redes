import { Administrador } from "src/app/admin/interfaces/administrador.interface";

export interface LoginResponse {
    usuario: Administrador;
    token:  string;
}