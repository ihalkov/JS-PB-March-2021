function numbersNto1(n = '') {
    let num = Number(n);
    let output = [];
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
    return output.join('\n');
}

// console.log(numbersNto1(['2']));
// console.log(numbersNto1(['3']));
// console.log(numbersNto1(['5']));