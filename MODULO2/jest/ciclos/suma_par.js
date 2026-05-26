function suma_par(numeros){
    if (!Array.isArray(numeros) || numeros.length === 0) 
        throw new TypeError('numeros invalidos');
    let contador = 0;
    for(let i=0;i<=numeros.length-1;i++){
        if (numeros[i]%2==0)
            {contador++;}
    }
    return contador;
}

module.exports={ suma_par };