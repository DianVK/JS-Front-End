function repeatString(text,number) {
    let new_text = ""
    for (i = 0; i < number ; i++) {
        new_text += text
    }
    console.log(new_text)
}

repeatString("abc", 3)