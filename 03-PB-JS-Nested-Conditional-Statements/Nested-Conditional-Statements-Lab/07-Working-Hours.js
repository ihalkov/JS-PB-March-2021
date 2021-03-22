function workingHours(input = []) {
    let time = Number(input[0]);
    let day = input[1];
    if (time >= 10 && time <= 18 && day !== 'Sunday') {
        return 'open';
    }
    return 'closed';
}
// console.log(workingHours(
//     [
//         "11",
//         "Monday"
//     ]
// ));
// console.log(workingHours(
//     [
//         "19",
//         "Friday"
//     ]
// ));
// console.log(workingHours(
//     [
//         "11",
//         "Sunday"
//     ]
// ));