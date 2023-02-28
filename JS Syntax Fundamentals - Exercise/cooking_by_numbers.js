function cooking(number,...operations) {

    for (i = 0; i < operations.length; i++) {

        let currentOperation = operations[i]

        if (currentOperation === "chop") {
            number = number / 2
        }  else if (currentOperation === "dice") {
            number = Math.sqrt(number)
        } else if (currentOperation === "spice") {
            number = number + 1
        } else if (currentOperation === "bake") {
            number = number * 3
        } else if (currentOperation === "fillet") {
            number = number * 0.80
        } 
         console.log(number)
    }
    
}

//cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')