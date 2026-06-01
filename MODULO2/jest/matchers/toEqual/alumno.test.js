const { crearAlumno } = require('./alumno');

describe('toEqual crear alumno',()=>{
    test('Caso Exitoso: primitivos con toBe',()=>{
        expect(crearAlumno('Ana',20)).toEqual(
            {nombre: 'Ana', edad: 20}
        );
    })
   
    test('Caso Fallido: lanzar error datos invÃ¡lidos', ()=>{
        expect(()=>crearAlumno('',20)).toThrow('Nombre invÃ¡lido');
        expect(()=>crearAlumno('Maria',-20)).toThrow('Edad invÃ¡lida');
    })
   
})
