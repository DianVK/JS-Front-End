function printAndSum(startNum, endNum) {
    nums = []
    for (num = startNum ; num <= endNum; num++) {
        nums.push(num)
    }
    console.log(nums.join(" "))
    let sum = nums.reduce(function(a, b){
    return a + b;
});
    console.log(`Sum: ${sum}`)

}

printAndSum(5, 10)