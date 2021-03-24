function newHouse(input = []) {
    let [type, count, budget] = [...input].map(x => isNaN(x) ? x : Number(x));
    let flowerPrices = {
        Roses: 5,
        Dahlias: 3.8,
        Tulips: 2.8,
        Narcissus: 3,
        Gladiolus: 2.5
    };
    let discount = {
        Roses: 0.1,
        Dahlias: 0.15,
        Tulips: 0.15,
    };

    let increase = {
        Narcissus: 0.15,
        Gladiolus: 0.2
    };

    let totalPrice = count * flowerPrices[type];
    let disc = 1;
    if (count > 80 && type === 'Roses') {
        disc = 1 - discount[type];
    } else if (count > 90 && type === 'Dahlias') {
        disc = 1 - discount[type];
    } else if (count > 80 && type === 'Tulips') {
        disc = 1 - discount[type];
    } else if (count < 120 && type === "Narcissus") {
        disc = 1 + increase[type];
    } else if (count < 80 && type === 'Gladiolus') {
        disc = 1 + increase[type];
    }

    let finalPrice = totalPrice * disc;
    let moneyDiff = Math.abs(finalPrice - budget);
    if (budget >= finalPrice) {
        return `Hey, you have a great garden with ${count} ${type} and ${moneyDiff.toFixed(2)} leva left.`;
    }
    return `Not enough money, you need ${moneyDiff.toFixed(2)} leva more.`;
}
// console.log(newHouse(
//     [
//         "Roses",
//         "55",
//         "250"
//     ]
// ));
// console.log(newHouse(
//     [
//         "Tulips",
//         "88",
//         "260"
//     ]));