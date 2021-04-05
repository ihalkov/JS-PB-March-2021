function vacation(input = []) {
    let moneyNeeded = Number(input[0]);
    let availableMoney = Number(input[1]);
    let daysSpend = 5;
    let totalDays = 0;
    let ind = 2;
    while (availableMoney < moneyNeeded) {
        let command = input[ind];
        let currMoney = Number(input[ind + 1]);
        totalDays += 1;

        if (command === 'spend') {
            daysSpend -= 1;
            if (daysSpend === 0) {
                return `You can't save the money.\n${totalDays}`;
            }
            if (currMoney > availableMoney) {
                currMoney = availableMoney;
            }
            availableMoney -= currMoney;
        } else if (command === 'save') {
            daysSpend = 5;
            availableMoney += currMoney;
        }
        ind += 2;
    }
    return `You saved the money for ${totalDays} days.`;
}

// console.log(vacation(
//     [
//         "2000",
//         "1000",
//         "spend",
//         "1200",
//         "save",
//         "2000"
//     ]
// ));
// console.log(vacation(
//     [
//         "110",
//         "60",
//         "spend",
//         "10",
//         "spend",
//         "10",
//         "spend",
//         "10",
//         "spend",
//         "10",
//         "spend",
//         "10"
//     ]
// ));
// console.log(vacation(
//     [
//         "250",
//         "150",
//         "spend",
//         "50",
//         "spend",
//         "50",
//         "save",
//         "100",
//         "save",
//         "100"
//     ]
// ));
