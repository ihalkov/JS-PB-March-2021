function readText(input = []) {
let ind = 0;
let currWord = input[ind];
let output = [];
while (currWord !== 'Stop') {
    output.push(currWord);
    ind += 1;
    currWord = input[ind];
}
return output.join('\n');
}

// console.log(readText(
//     [
//         "Nakov",
//         "SoftUni",
//         "Sofia",
//         "Bulgaria",
//         "SomeText",
//         "Stop",
//         "AfterStop",
//         "Europe",
//         "HelloWorld"
//     ]
// ));
// console.log(readText(
//     [
//         "Sofia",
//         "Berlin",
//         "Moscow",
//         "Athens",
//         "Madrid",
//         "London",
//         "Paris",
//         "Stop",
//         "AfterStop"
//     ]
// ));


function password(input = []) {
let name = input[0];
let pass = input[1];

let ind = 2;
let currPass = input[ind];
while (currPass !== pass) {
    ind += 1;
    currPass = input[ind];
}
return `Welcome ${name}!`;
}

// console.log(password(
//     [
//         "Nakov",
//         "1234",
//         "Pass",
//         "1324",
//         "1234"
//     ]
// ));
// console.log(password(
//     [
//         "Gosho",
//         "secret",
//         "secret"
//     ]
// ));

function sumNumbers(input = []) {
let targetSum = Number(input[0]);
let ind = 1;
let currSum = Number(input[ind]);

while (currSum < targetSum) {
    ind += 1;
    currSum += Number(input[ind]);
}
return currSum;
}

// console.log(sumNumbers(
//     [
//         "100",
//         "10",
//         "20",
//         "30",
//         "40"
//     ]
// ));
// console.log(sumNumbers(
//     [
//         "20",
//         "1",
//         "2",
//         "3",
//         "4",
//         "5",
//         "6"]
// ));

function sequence2kPlus1(input = []) {
let targetNum = Number(input[0]);
let output = [];
let currNum = 1;
while (currNum <= targetNum) {
    output.push(currNum);
    currNum = (currNum * 2) + 1;
}
return output.join('\n');
}
// console.log(sequence2kPlus1(['3']));
// console.log(sequence2kPlus1(['8']));
// console.log(sequence2kPlus1(['17']));
// console.log(sequence2kPlus1(['31']));

function accountBalance(input = []) {
let totMoney = 0;
let ind = 0;
let currMoney = isNaN(input[ind]) ? input[ind] : Number(input[ind]);
let output = [];

while (currMoney !== 'NoMoreMoney') {
    ind += 1;
    if (currMoney < 0) {
        output.push('Invalid operation!');
        break;
    }
    output.push(`Increase: ${currMoney.toFixed(2)}`);
    totMoney += currMoney;
    currMoney = currMoney = isNaN(input[ind]) ? input[ind] : Number(input[ind]);
}
output.push(`Total: ${totMoney.toFixed(2)}`);
return output.join('\n');
}
// console.log(accountBalance(
//     [
//         "5.51",
//         "69.42",
//         "100",
//         "NoMoreMoney"
//     ]
// ));
// console.log(accountBalance(
//     [
//         "120",
//         "45.55",
//         "-150"
//     ]
// ));

function maxNumber(input = []) {
let ind = 0;
let curr = input[ind];
let max = Number.MIN_SAFE_INTEGER;
while (curr !== 'Stop') {
    let num = Number(curr);
    if (max < curr) {
        max = num;
    }
    ind += 1;
    curr = input[ind];
}
return max;
}
// console.log(maxNumber(
//     [
//         "100",
//         "99",
//         "80",
//         "70",
//         "Stop"
//     ]
// ));
// console.log(maxNumber(
//     [
//         "-10",
//         "20",
//         "-30",
//         "Stop"
//     ]
// ));
// console.log(maxNumber(
//     [
//         "45",
//         "-20",
//         "7",
//         "99",
//         "Stop"
//     ]
// ));
// console.log(maxNumber(
//     [
//         "999",
//         "Stop"
//     ]
// ));
// console.log(maxNumber(
//     [
//         "-1",
//         "-2",
//         "Stop"
//     ]
// ));

function minNumber(input = []) {
let ind = 0;
let curr = input[ind];
let min = Number.MAX_SAFE_INTEGER;
while (curr !== 'Stop') {
    let num = Number(curr);
    if (min > num) {
        min = num;
    }
    ind += 1;
    curr = input[ind];
}
return min;
}

// console.log(minNumber(
//     [
//         "100",
//         "99",
//         "80",
//         "70",
//         "Stop"
//     ]
// ));
// console.log(minNumber(
//     [
//         "-10",
//         "20",
//         "-30",
//         "Stop"
//     ]
// ));
// console.log(minNumber(
//     [
//         "45",
//         "-20",
//         "7",
//         "99",
//         "Stop"
//     ]
// ));
// console.log(minNumber(
//     [
//         "999",
//         "Stop"
//     ]
// ));
// console.log(minNumber(
//     [
//         "-1",
//         "-2",
//         "Stop"
//     ]
// ));

function graduationPt2(input = []) {
let name = input[0];
let ind = 1;
let length = input.length;
let sumGrades = 0;
let countPoor = 0;
while (ind <= length - 1) {
    let currGrade = Number(input[ind]);
    if (currGrade < 4.00) {
        countPoor += 1;
        if (countPoor > 1) {
            return `${name} has been excluded at ${ind - 1} grade`;
        }
    }
    sumGrades += currGrade;
    ind += 1;
}
let avg = sumGrades / 12;

return `${name} graduated. Average grade: ${avg.toFixed(2)}`;
}

// console.log(graduationPt2(
//     [
//         "Gosho",
//         "5",
//         "5.5",
//         "6",
//         "5.43",
//         "5.5",
//         "6",
//         "5.55",
//         "5",
//         "6",
//         "6",
//         "5.43",
//         "5"
//     ]
// ));
// console.log(graduationPt2(
//     [
//         "Mimi",
//         "5",
//         "6",
//         "5",
//         "6",
//         "5",
//         "6",
//         "6",
//         "2",
//         "3"
//     ]
// ));