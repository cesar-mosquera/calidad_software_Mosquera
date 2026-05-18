
const { estadoTemperatura } = require('./estadoTemperatura');

describe('estadoTemperatura',()=>{
    test('Happy path: 35 => calor', ()=>{
        expect(estadoTemperatura(35)).toBe('calor')
    })
    test('Happy path: 20 => templado', ()=>{
        expect(estadoTemperatura(20)).toBe('templado')
    })
    test('Happy path: -28 => frio', ()=>{
        expect(estadoTemperatura(-28)).toBe('frio')
    })
    test('Sad path: temperatura no valida', ()=>{
        expect(()=>estadoTemperatura(-68).toThrow('temperatura invalida'))
        expect(()=>estadoTemperatura(86).toThrow('temperatura invalida'))
        expect(()=>estadoTemperatura().toThrow('temperatura invalida'))
    })

})