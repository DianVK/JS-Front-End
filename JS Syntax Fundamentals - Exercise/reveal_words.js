function fitWord(words,sentence) {
    words = words.split(", ")
    sentence = sentence.split(" ")
    for (i = 0; i < sentence.length ; i++) {
        for (const word of words) {
            if (sentence[i][0] === "*" && word.length === sentence[i].length) {
                sentence[i] = word
            }
        }
    }
    console.log(...sentence)
}




fitWord('great','softuni is ***** place for learning new programming languages')