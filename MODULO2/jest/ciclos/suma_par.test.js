const { suma_par } = require('./suma_par');

describe('suma_par', () => {
    test('Happy path: arreglo con pares e impares', () => {
        expect(suma_par([1, 2, 3, 4, 5, 6])).toBe(3)
        expect(suma_par([10, 21, 32])).toBe(2)
    })

    test('Happy path: solo impares o ceros', () => {
        expect(suma_par([1, 3, 5, 7])).toBe(0)
        expect(suma_par([0, 2, -4])).toBe(3) 
    })

    test('Sad path: numeros inválidos', () => {
        expect(() => suma_par([])).toThrow('numeros invalidos')
        expect(() => suma_par('no soy un array')).toThrow('numeros invalidos')
        expect(() => suma_par(456)).toThrow('numeros invalidos')
        expect(() => suma_par(null)).toThrow('numeros invalidos')
    })
})