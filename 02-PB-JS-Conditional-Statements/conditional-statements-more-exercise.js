function pipesInPool(input = []) {
    let [volume, p1, p2, h] = [...input].map(Number);
    // occupancy
    let p1Tot = p1 * h;
    let p2Tot = p2 * h;
    let filled = p1Tot + p2Tot;

    if (filled > volume) {
        let over = filled - volume;
        return `For ${h.toFixed(2)} hours the pool overflows with ${over.toFixed(2)} liters.`;
    }
    let poolOccupancy = (filled / volume) * 100;
    let p1Occupancy = (p1Tot / filled) * 100;
    let p2Occupancy = (p2Tot / filled) * 100;
    return `The pool is ${poolOccupancy.toFixed(2)}% full. Pipe 1: ${p1Occupancy.toFixed(2)}%. Pipe 2: ${p2Occupancy.toFixed(2)}%.`;
}

// console.log(pipesInPool(
//     [
//         '1000', '100', '120', '3'
//     ]
// ));
// console.log(pipesInPool(
//     [
//         '100', '100', '100', '2.5'
//     ]
// ));

function sleepyTomCat(input = []) {
    let leaveDays = Number(input[0]);
    let workDays = 365 - leaveDays;

    let norm = 30000;
    let workDaysNorm = 63;
    let leaveDaysNorm = 127;

    let playedMinutes = (workDays * workDaysNorm) + (leaveDays * leaveDaysNorm);

    let diff = Math.abs(norm - playedMinutes);
    let h = Math.floor(diff / 60);
    let m = diff % 60;
    if (playedMinutes > norm) {
        return `Tom will run away\n${h} hours and ${m} minutes more for play`;
    }
    return `Tom sleeps well\n${h} hours and ${m} minutes less for play`;
}

// console.log(sleepyTomCat(['20']));
// console.log(sleepyTomCat(['113']));

function harvest(input = []) {
    let [area, grapePerM2, neededLiters, workers] = [...input].map(Number);
    let wineArea = area * 0.4;
    let totalKg = wineArea * grapePerM2;
    let producedLiters = totalKg / 2.5;

    let diff = Math.abs(neededLiters - producedLiters);
    if (producedLiters < neededLiters) {
        return `It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`;
    }

    let winePerWorker = diff / workers;
    let output = [
        `Good harvest this year! Total wine: ${Math.floor(producedLiters)} liters.`,
        `${Math.ceil(diff)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`
    ];
    return output.join('\n');
}

// console.log(harvest(
//     [
//         '650', '2', '175', '3'
//     ]
// ));
// console.log(harvest(
//     [
//         '1020', '1.5', '425', '4'
//     ]
// ));

function transportPrice(input = []) {
    let [distance, tariff] = [...input];
    distance = Number(distance);

    if (distance >= 100) {
        return (distance * 0.06).toFixed(2);
    } else if (distance >= 20) {
        return (distance * 0.09).toFixed(2);
    } else if (tariff === 'day') {
        return ((distance * 0.79) + 0.7).toFixed(2);
    }
    return ((distance * 0.9) + 0.7).toFixed(2);;
}
// console.log(transportPrice(
//     [
//         '5', 'day'
//     ]
// ));
// console.log(transportPrice(
//     [
//         '7', 'night'
//     ]
// ));
// console.log(transportPrice(
//     [
//         '25', 'day'
//     ]
// ));
// console.log(transportPrice(
//     [
//         '180', 'night'
//     ]
// ));

function firm(input = []) {
    let [hoursNeeded, days, workersWithOvertime] = [...input].map(Number);
    let overtime = workersWithOvertime * 2 * days;
    days = days * 0.9;
    let totalHours = Math.floor((days * 8) + overtime);

    let timeDiff = Math.abs(hoursNeeded - totalHours);
    if (hoursNeeded > totalHours) {
        return `Not enough time!${timeDiff} hours needed.`;
    }
    return `Yes!${timeDiff} hours left.`;
}

// console.log(firm(
//     [
//         '90', '7', '3'
//     ]
// ));
// console.log(firm(
//     [
//         '99', '3', '1'
//     ]
// ));

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

function flowerShop(input = []) {
    let [magnolii, ziumbiuli, roses, cactuses, presentPrice] = [...input].map(Number);
    let totalMoney = (magnolii * 3.25) + (ziumbiuli * 4) + (roses * 3.5) + (cactuses * 8);
    let profit = totalMoney * 0.95;
    let moneyDiff = Math.abs(presentPrice - profit);
    if (profit < presentPrice) {
        return `She will have to borrow ${Math.ceil(moneyDiff)} leva.`;
    }
    return `She is left with ${Math.floor(moneyDiff)} leva.`;
}
// console.log(flowerShop(
//     [
//         '2',
//         '3',
//         '5',
//         '1',
//         '50'
//     ]
// ));
// console.log(flowerShop(
//     [
//         '15',
//         '7',
//         '5',
//         '10',
//         '100'
//     ]
// ));

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