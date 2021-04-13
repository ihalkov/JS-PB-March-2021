function clock() {
    let output = [];
    for (let h = 0; h <= 23; h++) {
        for (let m = 0; m <= 59; m++) {
            output.push(`${h}:${m}`);
        }

    }
    return output.join('\n');
}

// console.log(clock());

function multiplicationTable() {
    let output = [];
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            output.push(`${i} * ${j} = ${i * j}`);
        }
    }
    return output.join('\n');
}
// console.log(multiplicationTable());

function combinations(input = []) {
    let num = Number(input[0]);
    let combinations = 0;
    for (let x1 = 0; x1 <= num; x1++) {
        for (let x2 = 0; x2 <= num; x2++) {
            for (let x3 = 0; x3 <= num; x3++) {
                let curr = x1 + x2 + x3;
                if (curr === num) {
                    combinations += 1;
                }
            }
        }
    }
    return combinations;
}
// console.log(combinations(['25']));
// console.log(combinations(['20']));
// console.log(combinations(['5']));

function sumOfTwoNumbers(input = []) {
    let [begin, end, magicNum] = [...input].map(Number);
    let combination = 0;
    for (let i = begin; i <= end; i++) {
        for (let j = begin; j <= end; j++) {
            let result = i + j;
            combination += 1;
            if (result === magicNum) {
                return `Combination N:${combination} (${i} + ${j} = ${magicNum})`;
            }
        }
    }
    return `${combination} combinations - neither equals ${magicNum}`;
}

// console.log(sumOfTwoNumbers(
//     [
//         "1",
//         "10",
//         "5"
//     ]
// ));
// console.log(sumOfTwoNumbers(
//     [
//         "23",
//         "24",
//         "20"
//     ]
// ));
// console.log(sumOfTwoNumbers(
//     [
//         "88",
//         "888",
//         "1000"
//     ]
// ));
// console.log(sumOfTwoNumbers(
//     [
//         "88",
//         "888",
//         "2000"
//     ]
// ));

function traveling(input = []) {
    let destination = input[0];
    let minBudget = Number(input[1]);
    let budget = 0;
    let output = [];
    for (let i = 2; i < input.length; i++) {
        let curr = input[i];
        if (!isNaN(curr)) {
            budget += Number(curr);
            if (budget >= minBudget) {
                output.push(`Going to ${destination}!`);
            }
            continue;
        }
        destination = input[i];
        minBudget = Number(input[++i]);
        budget = 0;
    }
    return output.join('\n');
}
// console.log(traveling(["Greece",
// "1000",
// "200",
// "200",
// "300",
// "100",
// "150",
// "240",
// "Spain",
// "1200",
// "300",
// "500",
// "193",
// "423",
// "End"])
// );
// console.log(traveling(["France",
// "2000",
// "300",
// "300",
// "200",
// "400",
// "190",
// "258",
// "360",
// "Portugal",
// "1450",
// "400",
// "400",
// "200",
// "300",
// "300",
// "Egypt",
// "1900",
// "1000",
// "280",
// "300",
// "500",
// "End"])
// );

function building(input = []) {
    let [floors, rooms] = [...input].map(Number);
    let output = [];
    for (let fl = floors; fl > 0; fl -= 1) {
        let line = '';
        let roomType = '';
        if (fl === floors) {
            roomType = 'L'
        } else if (fl % 2 === 0) {
            roomType = 'O';
        } else {
            roomType = 'A';
        }
        for (let room = 0; room < rooms; room += 1) {
            line += `${roomType}${fl}${room} `;
        }
        output.push(line);
    }
    return output.join('\n');
}

// console.log(building(["6", "4"]));
// console.log(building(["9", "5"]));
// console.log(building(["4", "4"]));
