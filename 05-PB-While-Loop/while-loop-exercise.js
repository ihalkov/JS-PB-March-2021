function oldBooks(input = []) {
    let favBook = input[0];
    let ind = 1;
    let currBook = input[ind];
    let books = 0;
    while (currBook !== 'No More Books') {
        if (currBook === favBook) {
            return `You checked ${books} books and found it.`;
        }
        ind += 1;
        books += 1;
        currBook = input[ind];
    }
    return `The book you search is not here!\nYou checked ${books} books.`;
}

// console.log(oldBooks(
//     [
//         "Troy",
//         "Stronger",
//         "Life Style",
//         "Troy"
//     ]
// ));
// console.log(oldBooks(
//     [
//         "The Spot",
//         "Hunger Games",
//         "Harry Potter",
//         "Torronto",
//         "Spotify",
//         "No More Books"
//     ]
// ));
// console.log(oldBooks(
//     [
//         "Bourne",
//         "True Story",
//         "Forever",
//         "More Space",
//         "The Girl",
//         "Spaceship",
//         "Strongest",
//         "Profit",
//         "Tripple",
//         "Stella",
//         "The Matrix",
//         "Bourne"
//     ]
// ));

function examPreparation(input = []) {
    let poorGrades = Number(input[0]);
    let ind = 1;
    let currTask = input[ind];
    let total = 0;
    let grades = 0;
    let lastTask = '';
    while (currTask !== 'Enough') {
        let currGrade = Number(input[ind + 1]);
        lastTask = currTask;
        total += currGrade;
        grades += 1;
        if (currGrade <= 4) {
            poorGrades -= 1;
            if (poorGrades === 0) {
                return `You need a break, ${input[0]} poor grades.`;
            }
        }
        ind += 2;
        currTask = input[ind];
    }
    let avgScore = total / grades;
    let result = [`Average score: ${avgScore.toFixed(2)}`, `Number of problems: ${grades}`, `Last problem: ${lastTask}`];
    return result.join('\n');
}

// console.log(examPreparation(
//     [
//         "3",
//         "Money",
//         "6",
//         "Story",
//         "4",
//         "Spring Time",
//         "5",
//         "Bus",
//         "6",
//         "Enough",
//         ""
//     ]
// ));
// console.log(examPreparation(
//     [
//         "2",
//         "Income",
//         "3",
//         "Game Info",
//         "6",
//         "Best Player",
//         "4"
//     ]
// ));

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

function walking(input = []) {
    let target = 10000;
    let totalSteps = 0;
    let ind = 0;
    while (ind < input.length) {
        let curr = input[ind];
        ind += 1
        if (curr === 'Going home') {
            continue;
        }
        totalSteps += Number(curr);
    }
    let diff = Math.abs(target - totalSteps);
    if (target > totalSteps) {
        return `${diff} more steps to reach goal.`;
    }
    return `Goal reached! Good job!\n${diff} steps over the goal!`;
}

// console.log(walking(
//     [
//         "1000",
//         "1500",
//         "2000",
//         "6500"
//     ]
// ));
// console.log(walking(
//     [
//         "1500",
//         "3000",
//         "250",
//         "1548",
//         "2000",
//         "Going home",
//         "2000"
//     ]
// ));
// console.log(walking(
//     [
//         "1500",
//         "300",
//         "2500",
//         "3000",
//         "Going home",
//         "200"
//     ]
// ));
// console.log(walking(
//     [
//         "125",
//         "250",
//         "4000",
//         "30",
//         "2678",
//         "4682"
//     ]
// ));