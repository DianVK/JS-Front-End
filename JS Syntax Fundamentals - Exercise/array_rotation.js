function ArrayRotation(numbers, countElements) {
    for (i = 0; i < countElements ; i++) {
        let firstNum = numbers.shift() 
        numbers.push(firstNum)
    }
    console.log(numbers.join(" "))
}

ArrayRotation([51, 47, 32, 61, 21], 2)