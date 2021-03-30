function numbersDivisibleBy9(input = []) {
    let [num1, num2] = [...input].map(Number);
    let sum = 0;
    let result = [];
    for (let i = num1; i <= num2; i++) {
        if (i % 9 === 0) {
            result.push(i);
            sum += i;
        }
    }
    return `The sum: ${sum}\n${result.join('\n')}`;
}

// console.log(numbersDivisibleBy9(['100', '200']));