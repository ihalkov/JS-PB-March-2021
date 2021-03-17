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