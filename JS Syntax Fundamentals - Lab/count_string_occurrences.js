function wordsCounter(sentence,searchedWord) {
    let words = sentence.plit(' ');
    let counter = 0;
    for (let word of words) {
        if (word === searchedWord) {
            counter += 1
        }
    }
    console.log(counter)
}

wordsCounter('This is a word and it also is a sentence','is')