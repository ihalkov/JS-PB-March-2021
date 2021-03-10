function excellentResult(input = []) {
    let grade = Number(input[0]);
    return grade >= 5.5 ? 'Excellent!' : '';
}

// console.log(excellentResult(['6']));
// console.log(excellentResult(['5']));
// console.log(excellentResult(['5.50']));
// console.log(excellentResult(['5.49']));

function greaterNumber(input = []) {
    let [num1, num2] = [...input].map(Number);
    return num1 > num2 ? num1 : num2;
}

// console.log(greaterNumber(["5", "3"]));
// console.log(greaterNumber(["3", "5"]));
// console.log(greaterNumber(["10", "10"]));
// console.log(greaterNumber(["-5", "5"]));

function evenOrOdd(input = []) {
    let num = Number(input[0]);
    return num % 2 === 0 ? 'even' : 'odd';
}

// console.log(evenOrOdd(['2']));
// console.log(evenOrOdd(['3']));
// console.log(evenOrOdd(['25']));
// console.log(evenOrOdd(['1024']));

function number100to200(input = []) {
    let num = Number(input[0]);
    let result = 'Between 100 and 200';
    if (num < 100) {
        result = 'Less than 100';
    } else if (num > 200) {
        result = 'Greater than 200';
    }
    return result;
}

// console.log(number100to200(['95']));
// console.log(number100to200(['120']));
// console.log(number100to200(['210']));

function passwordGuess(input = []) {
    let validPass = 's3cr3t!P@ssw0rd';
    let givenPass = input[0];
    return validPass === givenPass ? 'Welcome' : 'Wrong password!';
}
// console.log(passwordGuess(["qwerty"]));
// console.log(passwordGuess(["s3cr3t!P@ssw0rd"]));
// console.log(passwordGuess(["s3cr3t!p@ss"]));


function areaOfFigures(input = []) {
    // square, rectangle, circle или triangle
    let type = input.shift();
    let [arg1, arg2] = [...input].map(Number);
    let area = 0;
    switch (type) {
        case 'square':
            area = arg1 ** 2;
            break;
        case 'rectangle':
            area = arg1 * arg2;
            break;
        case 'circle':
            area = Math.PI * arg1 ** 2;
            break;
        case 'triangle':
            area = (arg1 * arg2) / 2;
            break;
    }
    return area.toFixed(3);
}
// console.log(areaOfFigures(["square", "5"]));
// console.log(areaOfFigures(["rectangle", "7", "2.5"]));
// console.log(areaOfFigures(["circle", "6"]));
// console.log(areaOfFigures(["triangle", "4.5", "20"]));

function toyShop(input = []) {
    let [travelPrice, puzzles, speakingDolls, teddyBears, minions, trucks] = [...input].map(Number);
    let totalToys = puzzles + speakingDolls + teddyBears + minions + trucks;
    let profit = puzzles * 2.6 + speakingDolls * 3 + teddyBears * 4.1 + minions * 8.2 + trucks * 2;

    if (totalToys >= 50) {
        profit *= 0.75; // 25% discount
    }
    profit *= 0.9; // 10% rent
    let moneyDiff = Math.abs(profit - travelPrice);
    return profit >= travelPrice ? `Yes! ${moneyDiff.toFixed(2)} lv left.` : `Not enough money! ${moneyDiff.toFixed(2)} lv needed.`;
}
// console.log(toyShop(["40.8", "20", "25", "30", "50", "10"]));
// console.log(toyShop(["320", "8", "2", "5", "5", "1"]));