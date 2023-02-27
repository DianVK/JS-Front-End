function personTypeByAge(age) {
    if (0 <= age && age < 3) {
        console.log("baby");
    } else if (3 <= age && age < 14) {
        console.log("child");
    } else if (14 <= age && age < 20) {
        console.log("teenager");
    } else if (20 <= age && age < 66) {
        console.log("adult");
    } else if (66 <= age) {
        console.log("elder");
    } else {
        console.log("out of bounds");
    }
}

personTypeByAge(1)

personTypeByAge(20)

personTypeByAge(-1)

personTypeByAge(100)