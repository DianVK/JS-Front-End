function findSpecialWords(sentence) {
    sentence = sentence.split(" ")
    for (i=0;i < sentence.length ; i++) {
        if (sentence[i][0] === "#" && sentence[i].length > 1) {
            if (Boolean(sentence[i].match(/#[A-Za-z]/)) === true) {
                console.log(sentence[i].slice(1,sentence[i].length))
            }
            
        }
    }
}

findSpecialWords('The symbol # is known #variously in English-speaking #regions as the #number sign')