function sumSeconds(input = []) {
    // sec < 10  padding zero
    let totalSeconds = [...input]
        .map(Number)
        .reduce((acc, curr) => acc + curr);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return `${minutes}:${seconds}`;
}

// console.log(sumSeconds(
//     [
//         "35", "45", "44"
//     ]
// ));
// console.log(sumSeconds(
//     [
//         "22", "7", "34"
//     ]
// ));
// console.log(sumSeconds(
//     [
//         "50", "50", "49"
//     ]
// ));
// console.log(sumSeconds(
//     [
//         "14", "12", "10"
//     ]
// ));

function bonusScore(input = []) {
    let num = Number(input[0]);
    // let bonusPoints = 0;

    if (num > 1000) {
        bonusPoints = num * 0.1;
    } else if (num > 100) {
        bonusPoints = num * 0.2;
    } else if (num <= 100) {
        bonusPoints = 5;
    }

    if (num % 2 === 0) {
        bonusPoints += 1;
    } else if (num % 10 === 5) {
        bonusPoints += 2;
    }
    let totalPoints = num + bonusPoints;
    return [bonusPoints, totalPoints].join('\n');
}

// console.log(bonusScore(['20']));
// console.log(bonusScore(['175']));
// console.log(bonusScore(['2703']));
// console.log(bonusScore(['15875']));

function speedInfo(input = []) {
    // При скорост до 10 (включително) отпечатайте "slow".
    // При скорост над 10 и до 50 отпечатайте "average".
    // При скорост над 50 и до 150 отпечатайте "fast".
    // При скорост над 150 и до 1000 отпечатайте "ultra fast".
    // При по-висока скорост отпечатайте "extremely fast". 
    let speed = Number(input[0]);
    let msg = 'extremely fast';

    if (speed <= 10) {
        msg = 'slow';
    } else if (speed <= 50) {
        msg = 'average';
    } else if (speed <= 150) {
        msg = 'fast';
    } else if (speed <= 1000) {
        msg = 'ultra fast'
    }
    return msg;
}

// console.log(speedInfo(['8']));
// console.log(speedInfo(['49.5']));
// console.log(speedInfo(['126']));
// console.log(speedInfo(['160']));
// console.log(speedInfo(['3500']));

function metricConverter(input = []) {
    // входна единица	изходна единица
    // 1 meter (m)	1000 millimeters (mm)
    // 1 meter (m)	100 centimeters (cm)
    let [num, from, to] = [...input];
    num = Number(num);

    if (from === 'mm') {
        num /= 1000;
    } else if (from === 'cm') {
        num /= 100;
    }

    if (to === 'mm') {
        num *= 1000;
    } else if (to === 'cm') {
        num *= 100;
    }
    return num.toFixed(3);
}

// console.log(metricConverter(["12","mm","m"]));
// console.log(metricConverter(["150","m","cm"]));
// console.log(metricConverter(["45","cm","mm"]));

function timePlus15Minutes(input = []) {
    let [hour, minutes] = [...input].map(Number);
    // Часовете винаги са между 0 и 23
    // , а минутите винаги са между 0 и 59
    // Минутите се изписват винаги с по две цифри, с водеща нула, когато е необход(имо. 

    let totalMinutes = (hour * 60) + minutes + 15;
    hour = Math.floor(totalMinutes / 60);
    minutes = totalMinutes % 60;

    if (hour > 23) {
        hour = hour % 24;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    return `${hour}:${minutes}`;
}

// console.log(timePlus15Minutes(["1", "46"]));
// console.log(timePlus15Minutes(["0", "01"]));
// console.log(timePlus15Minutes(["23", "59"]));
// console.log(timePlus15Minutes(["11", "08"]));
// console.log(timePlus15Minutes(["12", "49"]));

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

function worldSwimmingRecord(input = []) {
    let [record, length, timeForMeter] = [...input].map(Number);

    let delay = Math.floor(length / 15) * 12.5;
    let timeOfIvan = (length * timeForMeter) + delay;
    let timeDiff = Math.abs(record - timeOfIvan);

    let output = `Yes, he succeeded! The new world record is ${timeOfIvan.toFixed(2)} seconds.`;
    if (record <= timeOfIvan) {
        output = `No, he failed! He was ${timeDiff.toFixed(2)} seconds slower.`;
    }
    return output;
}
// console.log(worldSwimmingRecord(
//     [
//         "10464",
//         "1500",
//         "20"
//     ]
// ));
// console.log(worldSwimmingRecord(
//     [
//         "55555.67",
//         "3017",
//         "5.03"
//     ]
// ));

function scholarship(input = []) {
    // Изискване за социална стипендия - 
    // доход на член от семейството по-малък от минималната работна заплата и успех над 4.5.
    // Размер на социалната стипендия - 35% от минималната работна заплата. 

    // Изискване за стипендия за отличен успех - успех над 5.5, включително.
    // Размер на стипендията за отличен успех - успехът на ученика, умножен по коефициент 25.

    let [income, grade, minSalary] = [...input].map(Number);
    let excellent = 0;
    let social = 0;
    if (grade >= 5.5) {
        excellent = Math.floor(grade * 25);
    }
    if (income < minSalary && grade >= 4.5) {
        social = Math.floor(minSalary * 0.35);
    }

    if (social === 0 && excellent === 0) {
        return 'You cannot get a scholarship!';
    } else if (social > excellent) {
        return `You get a Social scholarship ${social} BGN`;
    }
    return `You get a scholarship for excellent results ${excellent} BGN`;
}

// console.log(scholarship(
//     [
//         "480.00",
//         "4.60",
//         "450.00"
//     ]));
// console.log(scholarship(
//     [
//         "300.00",
//         "5.65",
//         "420.00"
//     ]
// ));