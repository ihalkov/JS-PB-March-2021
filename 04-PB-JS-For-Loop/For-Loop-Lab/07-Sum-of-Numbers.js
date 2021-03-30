function sumOfNumbers(input = []) {
    let strNum = input[0];
    let sum = 0;
    for (let i = 0; i < strNum.length; i++) {
        sum += Number(strNum[i]);
    }
    return `The sum of the digits is:${sum}`;
}

// console.log(sumOfNumbers(['1234']));
// console.log(sumOfNumbers(['564891']));