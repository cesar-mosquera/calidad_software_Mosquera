const { obtenerFrutas, contienePalabra, agregarElemento } = require('./toContainDemo');
describe('toContain matcher', () => {
    test('Caso Exitoso: elemento dentro de array', () => {
        const frutas = obtenerFrutas();
        expect(frutas).toContain('pera');
    });



    test('Caso Exitoso: palabra dentro de texto', () => {
        expect(contienePalabra('Jest es increÃ­ble', 'increÃ­ble')).toBe(true);
    });



    test('Caso Fallido: elemento no encontrado o tipo incorrecto', () => {
        const frutas = obtenerFrutas();
        expect(frutas).not.toContain('banana');
        expect(() => contienePalabra(123, 'texto')).toThrow('Ambos argumentos deben ser strings');
    });



    test('Caso Fallido: agregarElemento con valores invÃ¡lidos', () => {
        expect(() => agregarElemento({}, 'x')).toThrow('lista debe ser un array');
        expect(() => agregarElemento([], '')).toThrow('elemento no puede estar vacÃ­o');
    });
});
