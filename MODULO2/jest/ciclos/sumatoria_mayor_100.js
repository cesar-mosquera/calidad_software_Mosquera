function sumatoria_mayor_100(numeros){
    if (!Array.isArray(numeros) || numeros.length === 0) 
        throw new TypeError('numeros invalidos');
    let sumatoria = 0;
    for(let i=0;i<=numeros.length-1;i++) sumatoria+=numeros[i];
    if (sumatoria >= 100)
        return true;
    else 
        return false;
    return sumatoria;
}

module.exports={ sumatoria_mayor_100 };