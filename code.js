




const numbers = [1, 3, 5, 7, 9, true, false, 2, 4, 6, 'testing']


const pairsQuanty = ( numbers ) => {

    
    var pairCounter     = 0
    var oddCounter      = 0
    var booleanCounter  = 0
  
    numbers.forEach( item => {
        if ( typeof item === 'number' && isFinite(item) ) {
            (item % 2 === 0) ? pairCounter++ : oddCounter++;
        } else {
            if (typeof item === 'boolean') {
                booleanCounter++;
            } else {
                unknown ++;
            }
        }
    })

    return {'Pares': pairCounter, 'Impares': oddCounter, 'Booleanos': booleanCounter, 'Desconocidos': unknown}

}

console.log(pairsQuanty(numbers))
