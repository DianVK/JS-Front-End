function substring(sentence,start,elements) {
    let substr = sentence.slice(start,start + elements)
    console.log(substr)
}

substring('ASentence', 1, 8)