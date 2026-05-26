function array3(numeros){
    if (!Array.isArray(numeros) || numeros.length === 0 || numeros.length > 3) 
        throw new TypeError('numeros no es un arreglo');
    let total = 0;
    for(let i=0;i<=numeros.length-1;i++) 
        total+=numeros[i];
    promedio = total/numeros.length;
    return promedio;
}

module.exports={ array3 };