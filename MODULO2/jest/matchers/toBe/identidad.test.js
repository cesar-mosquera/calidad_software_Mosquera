const { identidad, suma } = require('./identidad');

describe('toBe Igualdad estricta',()=>{
    test('Caso Exitoso: primitivos con toBe',()=>{
        expect(suma(5,2)).toBe(7);
        expect(identidad('jest')).toBe('jest');
    })
    test('Caso Exitoso: misma referencia de objeto', ()=>{
        const obj={x:1}
        const mismo = identidad(obj);
        expect(mismo).toBe(obj);
    })
    test('Caso Fallido: 2 => objeto clonado No es la misma referencia', ()=>{
        const obj={x:1}
        const clonado = identidad(obj, {clone: true});
        expect(clonado).not.toBe(obj);
    })
    test('Caso Fallido: suma con valores no nÃºmericos', ()=>{
        expect(()=>suma('2',3).toThrow('ambos parametros deben ser nÃºmeros'))
    })

})
