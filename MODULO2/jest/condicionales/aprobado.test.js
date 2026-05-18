const { aprobado } = require('./aprobado');

describe('aprobado',()=>{
    test('Happy path: 10 => Aprobado', ()=>{
        expect(aprobado(10)).toBe('Aprobado')
    })
    test('Happy path: 5 => Supletorio', ()=>{
        expect(aprobado(5)).toBe('Supletorio')
    })
    test('Happy path: 1 => Reprobado', ()=>{
        expect(aprobado(1)).toBe('Reprobado')
    })
    test('Sad path: nota no valida', ()=>{
        expect(()=>aprobado(-1).toThrow('nota invalida'))
        expect(()=>aprobado('18').toThrow('nota invalida'))
        expect(()=>aprobado(11).toThrow('nota invalida'))
    })

})