function characterSequence(input = []) {
    let str = input[0];
    let output = [];
    for (let i = 0; i < str.length; i++) {
        output.push(str[i]);
    }
    return output.join('\n');
}

// console.log(characterSequence(["softuni"]));
// console.log(characterSequence(["ice cream"]));