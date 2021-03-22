function numberInRange(input = []) {
    let num = Number(input[0]);
    if (num >= -100 && num <= 100 && num !== 0) {
        return 'Yes';
    }
    return 'No';
}
// console.log(numberInRange(['-25']));
// console.log(numberInRange(['0']));
// console.log(numberInRange(['25']));