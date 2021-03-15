function godzillaVsKong(input = []) {
    // дали предвидените средства са достатъчни за снимането на филма.
    // За снимките  ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор.
    //     •	Декорът за филма е на стойност 10% от бюджета. 
    // •	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.
    let [budget, actors, pricePerCostume] = [...input].map(Number);
    let decorPrice = budget * 0.1;
    if (actors > 150) {
        pricePerCostume *= 0.9;
    }

    let needed = (actors * pricePerCostume) + decorPrice;
    let moneyDiff = budget - needed;
    if (moneyDiff < 0) {
        return `Not enough money!\nWingard needs ${Math.abs(moneyDiff).toFixed(2)} leva more.`;

    }
    return `Action!\nWingard starts filming with ${moneyDiff.toFixed(2)} leva left.`;
}

// console.log(godzillaVsKong(
//     [
//         "20000",
//         "120",
//         "55.5"
//     ]
// ));

// console.log(godzillaVsKong(
//     [
//         "15437.62",
//         "186",
//         "57.99"
//     ]
// ));
// console.log(godzillaVsKong(
//     [
//         "9587.88",
//         "222",
//         "55.68"
//     ]
// ));