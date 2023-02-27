function sumEvenOdd(numbers) {
    let total_even_sum = 0
    let total_odd_sum = 0
    for (i = 0; i < numbers.length ; i++) {
        if (numbers[i] % 2 === 0)
            total_even_sum = total_even_sum + numbers[i]
        else {
            total_odd_sum = total_odd_sum + numbers[i]
        }
    }
    console.log(total_even_sum - total_odd_sum)
}

sumEvenOdd([1,2,3,4,5,6])