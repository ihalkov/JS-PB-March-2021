// function(arr) {

//     console.log(arr);

// }

function christmasPreparation(input = []) {
    let wrapPrice = 5.8;
    let textilePrice = 7.2;
    let gluePrice = 1.2;
    let [wrapPaper, textile, glue, discount] = [...input].map(Number);
    let totalPrice = (wrapPaper * wrapPrice) + (textile * textilePrice) + (glue * gluePrice);
    let discountedPrice = totalPrice * (1 - (discount / 100));
    return discountedPrice.toFixed(3);
}

// console.log(christmasPreparation(['2', '3', '2.5', '25']));
// console.log(christmasPreparation(['4', '2', '5', '13']));
// console.log(christmasPreparation(['7', '8', '0.5', '45']));

function deerOfSanta(input = []) {
    let [days, totalFoodKg, deerOne, deerTwo, deerThree] = [...input].map(Number);
    let foodNeeded = (deerOne + deerTwo + deerThree) * days;
    let foodDiff = Math.abs(totalFoodKg - foodNeeded);
    if (foodNeeded > totalFoodKg) {
        return `${Math.ceil(foodDiff)} more kilos of food are needed.`;
    }
    return `${Math.floor(foodDiff)} kilos of food left.`;
}
// console.log(deerOfSanta([ '2', '10', '1', '1', '2' ]));
// console.log(deerOfSanta([ '5', '10', '2.1', '0.8', '11' ]));

function courierExpress(input = []) {
    let weightKg = Number(input[0]);
    let typeDelivery = input[1];
    let distanceKm = Number(input[2]);
    let pricePerKm = getStandardPrice(weightKg);
    let pricePerKg = 0;
    if (typeDelivery === 'express') {
        let increase = pricePerKm * getPercentIncrease(weightKg);
        pricePerKg = weightKg * increase;
    }
    
    let totalPrice = (pricePerKm + pricePerKg) * distanceKm;
    return `The delivery of your shipment with weight of ${weightKg.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`;

    function getPercentIncrease(weight) {
        if (weight > 90) {
            return 0.01;
        } else if (weight > 40) {
            return 0.02;
        } else if (weight > 10) {
            return 0.05;
        } else if (weight > 1) {
            return 0.4;
        }
        return 0.8;
    }
    function getStandardPrice(weight) {
        if (weight > 90) {
            return 0.2;
        } else if (weight > 40) {
            return 0.15;
        } else if (weight > 10) {
            return 0.10;
        } else if (weight > 1) {
            return 0.05;
        }
        return 0.03;
    }
}
// console.log(courierExpress([ '1.5', 'standard', '100' ]));
// console.log(courierExpress(['87', 'express', '130']));
// console.log(courierExpress(['20', 'standard', '349']));

function workout(input = []) {
    let target = 1000;
    // let daysRunning = Number(input[0]);
    let dayOneKms = Number(input[1]);
    let run = dayOneKms;
    let prevDay = dayOneKms;
    for (let i = 2; i < input.length; i++) {
        let increaseKms = Number(input[i]) / 100;
        let currDay = prevDay * (1 + increaseKms);
        run += currDay;
        prevDay = currDay;
    }
    let diff = Math.ceil(Math.abs(target - run));
    if (run < target) {
        return `Sorry Mrs. Ivanova, you need to run ${diff} more kilometers`;
    }
    return `You've done a great job running ${diff} more kilometers!`;
}

// console.log(workout(
//     [
//         '5',  '30', '10',
//         '15', '20', '5',
//         '12'
//       ]
// ));
// console.log(workout(
//     [ '4', '100', '30', '50', '60', '80' ]
// ));

function everest(input = []) {
    let days = 1;
    let climbed = 5364;
    let target = 8848;
    let maxDays = 5;
    for (let i = 0; i < input.length - 1; i += 2) {
        let sleep = input[i];
        if (sleep === 'Yes') {
            days += 1;
        }
        if (climbed >= target || sleep === 'END' || days > maxDays) {
            break;
        }
        let currMeters = Number(input[i + 1]);
        climbed += currMeters;
    }

    if (climbed >= target) {
        return `Goal reached for ${days} days!`;
    }
    return `Failed!\n${climbed}`;
}

// console.log(everest(
//     [
//         'Yes', '1254',
//         'Yes', '1402',
//         'No', '250',
//         'Yes', '635',
//         'END'
//     ]
// ));
// console.log(everest(
//     [
//         'Yes', '1000',
//         'Yes', '945',
//         'No', '1200',
//         'END'
//     ]

// ));

// console.log(everest(
//     [
//         'Yes', '535', 'Yes',
//         '849', 'Yes', '499',
//         'Yes', '400', 'Yes',
//         '500'
//     ]
// ));

console.log(everest(
    ['Yes', '700', 'END', '']
));

function substitute(input = []) {
    let [k, l, m, n] = [...input].map(Number);
    let output = [];
    // k [0, 8]
    // l [9, 0]
    // m [0, 8]
    // n [9, 0]
    let subsDone = 0;
    for (let i1 = k; i1 <= 8; i1++) {
        if (i1 % 2 === 1) {
            continue;
        }
        for (let j1 = 9; j1 >= l; j1--) {
            if (j1 % 2 === 0) {
                continue;
            }
            for (let i2 = m; i2 <= 8; i2++) {
                if (i2 % 2 === 1) {
                    continue;
                }
                for (let j2 = 9; j2 >= n; j2--) {
                    if (j2 % 2 === 0) {
                        continue;
                    }
                    if (subsDone >= 6) {
                        break;
                    }
                    let numOne = `${i1}${j1}`;
                    let numTwo = `${i2}${j2}`;
                    if (numOne === numTwo) {
                        output.push('Cannot change the same player.');
                        continue;
                    }

                    output.push(`${i1}${j1} - ${i2}${j2}`);
                    subsDone += 1;
                }
            }
        }
    }
    return output.join('\n');
}

// console.log(substitute(
//     ['7', '6', '8', '5']
// ));
// console.log(substitute(
//     ['6', '7', '5', '6']
// ));