export interface Miembro {
    id: number;
    nombre: string;
    avatar: string;
    correo: string;
    celular: number;
    identificacion: number;
    codigo: number;
    edad: number;
    direccion: string;
    semestre_actual: number;
    estado: 'Activo' | 'Inactivo';
}