function invalidNumber(input = []) {
    let num = Number(input[0]);
    if ((num < 100 || num > 200) && num !== 0) {
        return 'invalid';
    }
    return '';
}

// console.log(invalidNumber(['75']));
// console.log(invalidNumber(['150']));
// console.log(invalidNumber(['220']));
// console.log(invalidNumber(['199']));
// console.log(invalidNumber(['-1']));
// console.log(invalidNumber(['100']));
// console.log(invalidNumber(['200']));
// console.log(invalidNumber(['0']));