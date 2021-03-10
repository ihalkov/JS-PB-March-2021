function evenOrOdd(input = []) {
    let num = Number(input[0]);
    return num % 2 === 0 ? 'even' : 'odd';
}

// console.log(evenOrOdd(['2']));
// console.log(evenOrOdd(['3']));
// console.log(evenOrOdd(['25']));
// console.log(evenOrOdd(['1024']));