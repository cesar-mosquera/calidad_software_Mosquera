const { sumatoria_mayor_100 } = require('./sumatoria_mayor_100');

describe('sumatoria_mayor_100',()=>{
    test('Happy path: numeros=[50,50,50]=>true', ()=>{
        expect(sumatoria_mayor_100([50,50,50])).toBe(true)
    })
    test('Happy path: numeros=[6,6,6]=>false', ()=>{
        expect(sumatoria_mayor_100([6,6,6])).toBe(false)
    })
    test('Sad path: numeros inválido', ()=>{
        expect(()=>sumatoria_mayor_100(0).toThrow('numeros invalidos'))
        expect(()=>sumatoria_mayor_100([]).toThrow('numeros invalidos'))
        expect(()=>sumatoria_mayor_100('10').toThrow('numeros invalidos'))
    })

})