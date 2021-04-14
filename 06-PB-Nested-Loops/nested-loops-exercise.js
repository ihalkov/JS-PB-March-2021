function numberPyramid(input = []) {
    let num = Number(input[0]);
    let output = [];
    let count = 1;
    let isBigger = false;
    for (let i = 1; i <= num; i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            if (count > num) {
                isBigger = true;
                break;
            }
            line += count + ' ';
            count += 1;
        }
        output.push(line);
        if (isBigger === true) {
            break;
        }
    }
    return output.join('\n');
}

// console.log(numberPyramid(['1']));
// console.log(numberPyramid(['7']));
// console.log(numberPyramid(['12']));
// console.log(numberPyramid(['15']));

function equalSumsEvenOddPosition(input = []) {
    let [begin, end] = [...input].map(Number);
    let output = [];
    for (let currNum = begin; currNum <= end; currNum++) {
        if (hasEqualSums(currNum)) {
            output.push(currNum);
        }
    }
    return output.join(' ');

    function hasEqualSums(num = '') {
        num = num + '';
        let evenSum = 0;
        let oddSum = 0;
        for (let i = 0; i < num.length; i++) {
            if (i % 2 === 0) {
                evenSum += Number(num[i]);
                continue;
            }
            oddSum += Number(num[i]);
        }
        return ((evenSum === oddSum) ? true : false);
    }
}

// console.log(equalSumsEvenOddPosition(
//     [
//         "100000",
//         "100050"
//     ]
// ));
// console.log(equalSumsEvenOddPosition(
//     [
//         "123456",
//         "124000"
//     ]
// ));
// console.log(equalSumsEvenOddPosition(
//     [
//         "299900",
//         "300000"
//     ]
// ));
// console.log(equalSumsEvenOddPosition(
//     [
//         "100115",
//         "100120"
//     ]
// ));

function sumPrimeNonPrime(input = []) {
    let output = [];
    let primeSum = 0;
    let nonPrimeSum = 0;
    // Composite numbers can be arranged into rectangles but prime numbers cannot
    for (let i = 0; i < input.length - 1; i++) {
        let curr = input[i];
        if (curr === 'stop') {
            break;
        }
        let currNum = Number(curr);
        if (currNum < 0) {
            output.push('Number is negative.');
        } else if (isPrime(currNum)) {
            primeSum += currNum;
        } else {
            nonPrimeSum += currNum;
        }
    }
    output.push('Sum of all prime numbers is: ' + primeSum);
    output.push('Sum of all non prime numbers is: ' + nonPrimeSum);
    return output.join('\n');

    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

// console.log(sumPrimeNonPrime(
//     [
//         "3",
//         "9",
//         "0",
//         "7",
//         "19",
//         "4",
//         "stop"
//     ]
// ));
// console.log(sumPrimeNonPrime(
//     [
//         "30",
//         "83",
//         "33",
//         "-1",
//         "20",
//         "stop"
//     ]
// ));
// console.log(sumPrimeNonPrime(
//     [
//         "0",
//         "-9",
//         "0",
//         "stop"
//     ]
// ));

function trainTheTrainers(input = []) {
    let n = Number(input[0]);
    let presentation = input[1];
    let scoreSum = 0;
    let totalScore = 0;
    let count = 0;
    let output = [];
    for (let i = 2; i <= input.length; i++) {
        let curr = input[i];
        
        if (!isNaN(curr)) {
            scoreSum += Number(curr);
            continue;
        }
        let avgScore = scoreSum / n;
        totalScore += avgScore;
        count += 1;
        output.push(`${presentation} - ${avgScore.toFixed(2)}.`);
        if (curr === 'Finish') {
            let avgTotal = totalScore / count;
            output.push(`Student's final assessment is ${avgTotal.toFixed(2)}.`);
            break;
        }
        presentation = curr;
        scoreSum = 0;
    }
    return output.join('\n');
}

// console.log(trainTheTrainers(

//     [
//         '2',
//         'While-Loop',
//         '6.00',
//         '5.50',
//         'For-Loop',
//         '5.84',
//         '5.66',
//         'Finish',
//         ''
//     ]

// ));
// console.log(trainTheTrainers(
//     [
//         "3",
//         "Arrays",
//         "4.53",
//         "5.23",
//         "5.00",
//         "Lists",
//         "5.83",
//         "6.00",
//         "5.42",
//         "Finish"
//     ]
// ));
// console.log(trainTheTrainers(
//     [
//         "2",
//         "Objects and Classes",
//         "5.77",
//         "4.23",
//         "Dictionaries",
//         "4.62",
//         "5.02",
//         "RegEx",
//         "2.88",
//         "3.42",
//         "Finish"
//     ]
// ));