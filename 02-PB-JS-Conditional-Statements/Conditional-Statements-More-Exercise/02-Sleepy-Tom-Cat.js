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