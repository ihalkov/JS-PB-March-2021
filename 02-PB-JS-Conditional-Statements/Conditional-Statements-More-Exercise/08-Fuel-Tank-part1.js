function fuelTank(input = []) {
    let fuelType = input[0];
    fuelType = fuelType.toLowerCase();
    let litersInTank = Number(input[1]);

    if (fuelType !== 'diesel' && fuelType !== 'gas' && fuelType !== 'gasoline') {
        return 'Invalid fuel!';
    }

    if (litersInTank >= 25) {
        return `You have enough ${fuelType}.`;
    }
    return `Fill your tank with ${fuelType}!`;
}
// console.log(fuelTank(
//     [
//         'Diesel',
//         '10'
//     ]
// ));
// console.log(fuelTank(
//     [
//         'Gasoline',
//         '40'
//     ]
// ));
// console.log(fuelTank(
//     [
//         'Gas',
//         '25'
//     ]
// ));
// console.log(fuelTank(
//     [
//         'Kerosene',
//         '200'
//     ]
// ));