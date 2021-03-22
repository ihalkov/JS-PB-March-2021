function fruitShop(input = []) {
    let [fruit, day, qty] = [...input].map(x => isNaN(x) ? x : Number(x));
    let workdaysPrices = {
        banana: 2.50,
        apple: 1.20,
        orange: 0.85,
        grapefruit: 1.45,
        kiwi: 2.70,
        pineapple: 5.50,
        grapes: 3.85
    };

    let weekendPrices = {
        banana: 2.70,
        apple: 1.25,
        orange: 0.90,
        grapefruit: 1.60,
        kiwi: 3.00,
        pineapple: 5.60,
        grapes: 4.20
    };

    let workdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    let weekend = ['Saturday', 'Sunday'];

    if (weekend.includes(day) && weekendPrices.hasOwnProperty(fruit)) {
        let price = weekendPrices[fruit];
        let result = price * qty
        return result.toFixed(2);
    } else if (workdays.includes(day) && workdaysPrices.hasOwnProperty(fruit)) {
        let price = workdaysPrices[fruit];
        let result = price * qty;
        return result.toFixed(2);
    }
    return 'error';
}
// console.log(fruitShop(
//     [
//         "apple",
//         "Tuesday",
//         "2"
//     ]));
// console.log(fruitShop(
//     [
//         "orange",
//         "Sunday",
//         "3"
//     ]));
// console.log(fruitShop(
//     [
//         "kiwi",
//         "Monday",
//         "2.5"
//     ]
// ));
// console.log(fruitShop(
//     [
//         "grapes",
//         "Saturday",
//         "0.5"
//     ]
// ));
// console.log(fruitShop(
//     [
//         "tomato",
//         "Monday",
//         "0.5"
//     ]
// ));