function reverseArray(num, elements) {
    let newArray = [];
    for (let i = 0; i < num; i++) {
        newArray.push(elements[i]);
    }
    newArray.reverse();
    let output = newArray.join(" ");
    console.log(output);
}

reverseArray(3, [10, 20, 30, 40, 50]);