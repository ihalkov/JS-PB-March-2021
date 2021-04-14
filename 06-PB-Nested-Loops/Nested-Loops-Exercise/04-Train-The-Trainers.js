function trainTheTrainers(input = []) {
    let n = Number(input[0]);
    let presentation = input[1];
    let scoreSum = 0;
    let totalScore = 0;
    let count = 0;
    let output = [];
    for (let i = 2; i <= input.length; i++) {
        let curr = input[i];
        
        if (!isNaN(curr)) {
            scoreSum += Number(curr);
            continue;
        }
        let avgScore = scoreSum / n;
        totalScore += avgScore;
        count += 1;
        output.push(`${presentation} - ${avgScore.toFixed(2)}.`);
        if (curr === 'Finish') {
            let avgTotal = totalScore / count;
            output.push(`Student's final assessment is ${avgTotal.toFixed(2)}.`);
            break;
        }
        presentation = curr;
        scoreSum = 0;
    }
    return output.join('\n');
}

// console.log(trainTheTrainers(

//     [
//         '2',
//         'While-Loop',
//         '6.00',
//         '5.50',
//         'For-Loop',
//         '5.84',
//         '5.66',
//         'Finish',
//         ''
//     ]

// ));
// console.log(trainTheTrainers(
//     [
//         "3",
//         "Arrays",
//         "4.53",
//         "5.23",
//         "5.00",
//         "Lists",
//         "5.83",
//         "6.00",
//         "5.42",
//         "Finish"
//     ]
// ));
// console.log(trainTheTrainers(
//     [
//         "2",
//         "Objects and Classes",
//         "5.77",
//         "4.23",
//         "Dictionaries",
//         "4.62",
//         "5.02",
//         "RegEx",
//         "2.88",
//         "3.42",
//         "Finish"
//     ]
// ));