function greaterNumber(input = []) {
    let [num1, num2] = [...input].map(Number);
    return num1 > num2 ? num1 : num2;
}

// console.log(greaterNumber(["5", "3"]));
// console.log(greaterNumber(["3", "5"]));
// console.log(greaterNumber(["10", "10"]));
// console.log(greaterNumber(["-5", "5"]));