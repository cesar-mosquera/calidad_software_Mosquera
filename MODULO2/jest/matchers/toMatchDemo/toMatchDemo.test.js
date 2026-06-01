const { validarEmail, encontrarPalabra, limpiarTexto } = require('./toMatchDemo');

describe('toMatch matcher', () => {
    test('Caso Exitoso: validar correos electrÃ³nicos', () => {
        expect('usuario@mail.com').toMatch(/^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i);
        expect(validarEmail('alguien@dominio.ec')).toBe(true);
    });

    test('Caso Exitoso: encontrar palabra con regex', () => {
        expect(encontrarPalabra('Hola Jest', 'jest')).toBe(true);
    });

    test('Caso Fallido: email o patrÃ³n invÃ¡lido', () => {
        expect(() => validarEmail(123)).toThrow('email debe ser string');
        expect(() => encontrarPalabra('Texto', 123)).toThrow('texto y patrÃ³n deben ser strings');
    });

    test('Happy/Caso Fallido: limpiar texto', () => {
        expect(limpiarTexto(' Hola mundo ')).toMatch(/^Hola mundo$/);
        expect(() => limpiarTexto(null)).toThrow('texto debe ser string');
    });
});

