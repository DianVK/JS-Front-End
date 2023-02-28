function sameNumbers(number) {
    let numbers = number.toString()
    let output = "true"
    let last_num = parseInt(numbers[0])
    let numbers_sum = parseInt(numbers[0])
    for (num = 1; num < numbers.length ; num++) {
        let current_num = parseInt(numbers[num]);
        numbers_sum += current_num
        if (parseInt(numbers[num]) === parseInt(last_num)) {
            output = "true"
        } else {
            output = "false"
        }
    }
    console.log(output)
    console.log(numbers_sum)
    
}

sameNumbers(2222222)