function censoring(sentence, specialWord) {
    let censored = sentence.replace(specialWord, '*'.repeat(specialWord.length));
    while (censored.includes(specialWord)) {
      censored = censored.replace(specialWord, '*'.repeat(specialWord.length));
    }
    console.log(censored);
  }

censoring('A small sentence with some words', 'small')