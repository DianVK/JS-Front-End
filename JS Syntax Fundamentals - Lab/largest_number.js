function findLargestNum(num1, num2, num3) {
    if (num1 > num2 && num1 > num3){
        console.log(`The largest number is ${num1}.`)
    } else if (num2 > num1 && num2 > num3) {
        console.log(`The largest number is ${num2}.`)
    } else if (num3 > num1 && num3 > num2) {
        console.log(`The largest number is ${num3}.`)
    }
}

findLargestNum(5, -3, 16);

findLargestNum(-3, -5, -22.5);