function operationsBetweenNumbers(input = []) {
    let [num1, num2, operator] = [...input].map(x => isNaN(x) ? x : Number(x));
    let result = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return `Cannot divide ${num1} by zero`;
            }
            result = num1 / num2;
            break;
        case '%':
            if (num2 === 0) {
                return `Cannot divide ${num1} by zero`;
            }
            result = num1 % num2;
        default:
            break;
    }

    if (operator === '/') {
        return `${num1} / ${num2} = ${result.toFixed(2)}`;
    } else if (operator === '%') {
        return `${num1} % ${num2} = ${result}`
    }
    let isEven = result % 2 === 0;
    if (isEven) {
        return `${num1} ${operator} ${num2} = ${result} - even`;
    }
    return `${num1} ${operator} ${num2} = ${result} - odd`;
}

// console.log(operationsBetweenNumbers(
//     [
//         "10",
//         "12",
//         "+"
//     ]));
// console.log(operationsBetweenNumbers(
//     [
//         "10",
//         "1",
//         "-"
//     ]
// ));
// console.log(operationsBetweenNumbers(
//     [
//         "7",
//         "3",
//         "*"
//     ]
// ));
// console.log(operationsBetweenNumbers(
//     [
//         "123",
//         "12",
//         "/"
//     ]
// ));
// console.log(operationsBetweenNumbers(
//     [
//         "10",
//         "3",
//         "%"
//     ]
// ));
// console.log(operationsBetweenNumbers(
//     [
//         "112",
//         "0",
//         "/"
//     ]
// ));
// console.log(operationsBetweenNumbers(
//     [
//         "10",
//         "0",
//         "%"
//     ]
// ));