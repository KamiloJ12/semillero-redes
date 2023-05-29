export function obtenerColorFondoAleatorio(): string {
    const coloresFondo = ['blue', 'green', 'yellow', 'cyan', 'indigo', 'teal', 'orange', 'bluegray', 'purple', 'red'];
    const indiceAleatorio = Math.floor(Math.random() * coloresFondo.length);
    return coloresFondo[indiceAleatorio];
}