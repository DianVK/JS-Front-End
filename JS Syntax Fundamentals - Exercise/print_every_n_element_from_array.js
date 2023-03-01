function printNelements(array,number) {
    newArray = []
    for (let num = 0; num < array.length ; num++) {

        let currentEl = num
        if (currentEl % number === 0) {
            newArray.push(array[currentEl])
        }
    }
    return newArray

}

printNelements(['5', '20', '31', '4', '20'], 2)

printNelements(['dsa','asd', 'test', 'tset'], 2)

printNelements(['1', '2','3', '4', '5'], 6)