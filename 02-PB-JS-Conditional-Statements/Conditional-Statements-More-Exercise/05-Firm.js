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