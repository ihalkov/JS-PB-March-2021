function numberPyramid(input = []) {
    let num = Number(input[0]);
    let output = [];
    let count = 1;
    let isBigger = false;
    for (let i = 1; i <= num; i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            if (count > num) {
                isBigger = true;
                break;
            }
            line += count + ' ';
            count += 1;
        }
        output.push(line);
        if (isBigger === true) {
            break;
        }
    }
    return output.join('\n');
}

// console.log(numberPyramid(['1']));
// console.log(numberPyramid(['7']));
// console.log(numberPyramid(['12']));
// console.log(numberPyramid(['15']));