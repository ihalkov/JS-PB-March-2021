function multiplicationTable(input = []) {
    let output = [];
    let num = Number(input[0]);
    for (let i = 1; i <= 10; i++) {
        let res = i * num;
        output.push(`${i} * ${num} = ${res}`);
    }
    return output.join('\n');
}

// console.log(multiplicationTable(['5']));