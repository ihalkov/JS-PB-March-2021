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