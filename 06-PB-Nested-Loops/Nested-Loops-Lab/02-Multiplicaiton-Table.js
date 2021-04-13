function multiplicationTable() {
    let output = [];
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            output.push(`${i} * ${j} = ${i * j}`);
        }
    }
    return output.join('\n');
}
// console.log(multiplicationTable());