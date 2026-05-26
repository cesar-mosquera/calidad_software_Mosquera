const { array3 } = require('./array3');

describe('array3',()=>{
    test('Happy path: numeros=[5,5,5]=>5', ()=>{
        expect(array3([5,5,5])).toBe(5)
    })
    test('Happy path: numeros=[6,6,6]=>6', ()=>{
        expect(array3([6,6,6])).toBe(6)
    })
    test('Sad path: numeros inválido', ()=>{
        expect(()=>array3(0).toThrow('numeros no es un arreglo'))
        expect(()=>array3([]).toThrow('numeros no es un arreglo'))
        expect(()=>array3('10').toThrow('numeros no es un arreglo'))
    })

})