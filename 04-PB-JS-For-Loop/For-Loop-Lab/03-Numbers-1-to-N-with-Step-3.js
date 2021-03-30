function numbers1ToNStep3(n = '') {
    let num = Number(n);
    let output = [];
    for (let i = 1; i <= num; i += 3) {
        output.push(i);
    }
    return output.join('\n');
}

// console.log(numbers1ToNStep3(['10']));
// console.log(numbers1ToNStep3(['7']));
// console.log(numbers1ToNStep3(['15']));