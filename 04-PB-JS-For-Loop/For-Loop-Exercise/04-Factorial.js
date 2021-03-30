function factorial(input = []) {
    let num = Number(input[0]);
    let fact = 1;
    for (let i = num; i > 1; i--) {
        fact *= i;
    }
    return fact;
}

// console.log(factorial(['4']));
// console.log(factorial(['8']));