function fishingBoat(input = []) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);

    let rentShip = {
        Spring: 3000,
        Summer: 4200,
        Autumn: 4200,
        Winter: 2600
    };

    let discount = 0;
    if (fishers < 7) {
        discount = 0.1;
    } else if (fishers < 12) {
        discount = 0.15;
    } else {
        discount = 0.25;
    }

    let rent = rentShip[season];
    let price = rent * (1 - discount);
    if ((fishers % 2 === 0) && (season !== 'Autumn')) {
        // additional discount
        price *= 0.95;
    }
    
    let moneyDiff = Math.abs(budget - price);
    if (budget >= price) {
        return `Yes! You have ${moneyDiff.toFixed(2)} leva left.`;
    }
    return `Not enough money! You need ${moneyDiff.toFixed(2)} leva.`;
}
// console.log(fishingBoat(
//     [
//         "3600",
//         "Autumn",
//         "6"
//     ]
// ));
// console.log(fishingBoat(
//     [
//         "3000",
//         "Summer",
//         "11"
//     ]
// ));
// console.log(fishingBoat(
//     [
//         "2000",
//         "Winter",
//         "13"
//     ]
// ));

// console.log(fishingBoat(
//     [
//         "2000",
//         "Spring",
//         "10"
//     ]
// ));