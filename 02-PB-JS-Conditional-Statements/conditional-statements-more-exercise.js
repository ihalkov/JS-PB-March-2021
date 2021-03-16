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
    
}

console.log(firm(
    [
        '90', '7', '3'
    ]
));
console.log(firm(
    [
        '99', '3', '1'
    ]
));


console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());
console.log(pipesInPool());