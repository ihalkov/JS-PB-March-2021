function fuelTank2(input = []) {
    let fuelType = input[0];
    fuelType = fuelType.toLowerCase();
    let fuel = Number(input[1]);
    let card = input[2];
    let levaPerLiter = getLevaPerLiter(fuelType, card);
    let total = fuel * levaPerLiter;

    if (fuel > 25) {
        total *= 0.9;
    } else if (fuel > 20) {
        total *= 0.92;
    }
    return `${total.toFixed(2)} lv.`;

    function getLevaPerLiter(fuelType, card) {
        let prices = {
            gasoline: 2.22,
            diesel: 2.33,
            gas: 0.93
        };

        let discount = {
            gasoline: 0.18,
            diesel: 0.12,
            gas: 0.08
        };

        let levaPerLiter = prices[fuelType];
        if (card === 'Yes') {
            levaPerLiter -= discount[fuelType];
        }
        return levaPerLiter;
    }
}

// console.log(fuelTank2(
//     [
//         'Gas',
//         '30',
//         'Yes'
//     ]
// ));
// console.log(fuelTank2(
//     [
//         'Gasoline',
//         '25',
//         'No'
//     ]
// ));
// console.log(fuelTank2(
//     [
//         'Diesel',
//         '19',
//         'No'
//     ]
// ));