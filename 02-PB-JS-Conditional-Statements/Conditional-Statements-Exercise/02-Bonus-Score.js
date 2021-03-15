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