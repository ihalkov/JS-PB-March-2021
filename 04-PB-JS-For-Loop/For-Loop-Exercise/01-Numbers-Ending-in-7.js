function numbersEndingIn7() {
    let output = [];
    for (let i = 7; i < 1000; i++) {
        if (i % 10 === 7) {
            output.push(i);
        }
    }
    return output.join('\n');
}

// console.log(numbersEndingIn7());