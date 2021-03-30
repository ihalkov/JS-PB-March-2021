function evenPowersOf2(n = '') {
    let num = Number(n);
    let output = [];
    // power
    for (let pow = 0; pow <= num; pow++) {
        if (pow % 2 === 0) {
            output.push(2 ** pow);
        }
    }
    return output.join('\n');
}

// console.log(evenPowersOf2(['2']));
// console.log(evenPowersOf2(['4']));
// console.log(evenPowersOf2(['5']));
// console.log(evenPowersOf2(['6']));
// console.log(evenPowersOf2(['7']));