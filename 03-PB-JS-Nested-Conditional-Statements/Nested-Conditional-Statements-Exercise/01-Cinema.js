function cinema(input = []) {
    let [type, rows, cols] = [...input].map(x => isNaN(x) ? x : Number(x));
    let projection = {
        Premiere: 12,
        Normal: 7.5,
        Discount: 5
    };
    let ticketPice = projection[type];
    let profit = ticketPice * rows * cols;
    return profit.toFixed(2) + ' leva';
}

// console.log(cinema(
//     [
//         "Premiere",
//         "10",
//         "12"
//     ]
// ));
// console.log(cinema(
//     [
//         "Normal",
//         "21",
//         "13"
//     ]
// ));
// console.log(cinema(
// [
//     "Discount",
//     "12",
//     "30"
// ]));