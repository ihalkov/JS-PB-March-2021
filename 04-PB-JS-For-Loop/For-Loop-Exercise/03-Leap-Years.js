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