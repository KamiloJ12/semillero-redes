export interface Administrador {
    id: number;
    nombre: string;
    imagen: string;
    correo: string;
    celular: number;
    identificacion: number;
    codigo: number;
    rol: 'Administrador' | 'Superadministrador';
    estado: 'Activo' | 'Inactivo';
}