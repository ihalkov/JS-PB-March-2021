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