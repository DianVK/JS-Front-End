function sortNumbers(numbersList) {
    let sortednumbers = numbersList.sort((a, b) => a - b)

    sortedList = []
    while (numbersList.length > 0) {
        let current_number = numbersList.shift()
        sortedList.push(current_number)
        current_number = numbersList.pop()
        sortedList.push(current_number)
    }
    return sortedList
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])