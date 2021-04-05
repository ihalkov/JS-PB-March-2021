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
