function crearAlumno(nombre, edad){
    if (!nombre || typeof nombre != 'string'){
        throw new TypeError('Nombre invÃ¡lido');
    }
    if (edad < 0){
        throw new TypeError('Edad invÃ¡lida');
    }
    return {
        nombre,
        edad
    };
}
module.exports={ crearAlumno };
