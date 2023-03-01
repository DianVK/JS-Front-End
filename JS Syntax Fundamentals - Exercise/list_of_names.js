function sortList(names){
    names.sort()

    // for (let i=0; i < list.length; i++){
    //     console.log(`${i + 1}.${list[i]}`)
    // }

//     let index = 1;
//     for (const name of list) {
//         console.log(`${index}.${name}`);
//         index++;
//   }

    // console.log(list.sort().map((name, index) => `${index + 1}.${name}`).join("\n"));

    function *enumerate(array) {
        for (let i = 0; i < array.length; i += 1) {
           yield `${i + 1}.${array[i]}`;
        }
     }
    const list = names
    for (let x of enumerate(list)) {
    console.log(x);
    }
}


sortList(["John", "Bob", "Christina", "Ema"])