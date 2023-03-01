function splitter(text) {
    let words = [];
    let currentWord = "";

    for (let i = 0; i < text.length; i++) {
        let character = text[i];

        if (character == character.toUpperCase() && i > 0) {
            words.push(currentWord);
            currentWord = character;
        } else {
            currentWord += character;
        }
    }
    words.push(currentWord);

    console.log(words.join(", "));
}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');