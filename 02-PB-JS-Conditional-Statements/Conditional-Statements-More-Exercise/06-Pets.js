function pets(input = []) {
    let [days, availableFoodKg, dogDailyKg, catDailyKg, turtleDailyGr] = [...input].map(Number);
    let foodNeeded = days * (dogDailyKg + catDailyKg + (turtleDailyGr / 1000));
    let foodDiff = Math.abs(availableFoodKg - foodNeeded);

    if (availableFoodKg < foodNeeded) {
        return `${Math.ceil(foodDiff)} more kilos of food are needed.`;
    }
    return `${Math.floor(foodDiff)} kilos of food left.`;
}

// console.log(pets(
//     [
//         '2',
//         '10',
//         '1',
//         '1',
//         '1200'
//     ]
// ));
// console.log(pets(
//     [
//         '5',
//         '10',
//         '2.1',
//         '0.8',
//         '321'
//     ]
// ));