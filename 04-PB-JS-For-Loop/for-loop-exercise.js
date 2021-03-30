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

function multiplicationTable(input = []) {
    let output = [];
    let num = Number(input[0]);
    for (let i = 1; i <= 10; i++) {
        let res = i * num;
        output.push(`${i} * ${num} = ${res}`);
    }
    return output.join('\n');
}

// console.log(multiplicationTable(['5']));

function leapYears(input = []) {
    let output = [];
    let leap = Number(input[0]);
    let endYear = Number(input[1]);
    for (let i = leap; i <= endYear; i += 4) {
        output.push(i);
    }
    return output.join('\n');
}

// console.log(leapYears(
//     [
//         "1908",
//         "1919"
//     ]
// ));
// console.log(leapYears(
//     [
//         "2000",
//         "2011"
//     ]
// ));
// console.log(leapYears(
//     [
//         "1584",
//         "1597"
//     ]
// ));
// console.log(leapYears(
//     [
//         "2020",
//         "2032"
//     ]
// ));

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

function countTheWords(input = []) {
    let sentence = input[0];
    let words = sentence.split(' ');
    let count = words.length;
    if (count > 10) {
        return `The message is too long to be send! Has ${count} words.`;
    }
    return `The message was sent successfully!`;
}

// console.log(countTheWords(["This message has exactly eleven words. One more as it's allowed!"]));
// console.log(countTheWords(["This message has ten words and you can send it!"]));