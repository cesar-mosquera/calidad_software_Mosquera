/* Crear una función llamada estadoTemperatura que reciba una temperatura en grados Celsius.
Reglas:
Si la temperatura es mayor o igual a 30 → "Calor"
Si la temperatura es mayor o igual a 15 y menor que 30 → "Templado"
Si la temperatura es menor que 15 → "Frío"
Validaciones:
Debe ser un número
No puede ser NaN
No puede ser menor que -50
No puede ser mayor que 60
Si la temperatura es inválida, lanzar:
throw new TypeError('temperatura inválida');
 */
function estadoTemperatura(temperatura){
    if(!Number.isInteger(temperatura||temperatura<-50||temperatura > 60 || temperatura === NaN))
        throw new TypeError('temperatura invalida');
    estado = "frio";
    if(temperatura >= 30){
        estado = "calor"
    }else if (temperatura >= 15){
        estado = "templado"
    }
    return estado;
}
module.exports = { estadoTemperatura }