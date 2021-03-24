function cinema(input = []) {
    let [type, rows, cols] = [...input].map(x => isNaN(x) ? x : Number(x));
    let projection = {
        Premiere: 12,
        Normal: 7.5,
        Discount: 5
    };
    let ticketPice = projection[type];
    let profit = ticketPice * rows * cols;
    return profit.toFixed(2) + ' leva';
}

// console.log(cinema(
//     [
//         "Premiere",
//         "10",
//         "12"
//     ]
// ));
// console.log(cinema(
//     [
//         "Normal",
//         "21",
//         "13"
//     ]
// ));
// console.log(cinema(
// [
//     "Discount",
//     "12",
//     "30"
// ]));

function summerOutfit(input = []) {
    let deg = Number(input[0]);
    let partOfTheDay = input[1];

    if (deg >= 25) {
        let curr = {
            Morning: {
                Outfit: 'T-Shirt',
                Shoes: 'Sandals'
            },
            Afternoon: {
                Outfit: 'Swim Suit',
                Shoes: 'Barefoot'
            },
            Evening: {
                Outfit: 'Shirt',
                Shoes: 'Moccasins'
            }
        }
        return `It's ${deg} degrees, get your ${curr[partOfTheDay].Outfit} and ${curr[partOfTheDay].Shoes}.`;
    } else if (deg > 18) {
        let curr = {
            Morning: {
                Outfit: 'Shirt',
                Shoes: 'Moccasins'
            },
            Afternoon: {
                Outfit: 'T-Shirt',
                Shoes: 'Sandals'
            },
            Evening: {
                Outfit: 'Shirt',
                Shoes: 'Moccasins'
            }
        }
        return `It's ${deg} degrees, get your ${curr[partOfTheDay].Outfit} and ${curr[partOfTheDay].Shoes}.`;
    } else if (deg >= 10) {
        let curr = {
            Morning: {
                Outfit: 'Sweatshirt',
                Shoes: 'Sneakers'
            },
            Afternoon: {
                Outfit: 'Shirt',
                Shoes: 'Moccasins'
            },
            Evening: {
                Outfit: 'Shirt',
                Shoes: 'Moccasins'
            }
        }
        return `It's ${deg} degrees, get your ${curr[partOfTheDay].Outfit} and ${curr[partOfTheDay].Shoes}.`;
    }
}
// console.log(summerOutfit(
//     [
//         "16",
//         "Morning"
//     ]
// ));
// console.log(summerOutfit(
//     [
//         "22",
//         "Afternoon"
//     ]
// ));

function newHouse(input = []) {
    let [type, count, budget] = [...input].map(x => isNaN(x) ? x : Number(x));
    let flowerPrices = {
        Roses: 5,
        Dahlias: 3.8,
        Tulips: 2.8,
        Narcissus: 3,
        Gladiolus: 2.5
    };
    let discount = {
        Roses: 0.1,
        Dahlias: 0.15,
        Tulips: 0.15,
    };

    let increase = {
        Narcissus: 0.15,
        Gladiolus: 0.2
    };

    let totalPrice = count * flowerPrices[type];
    let disc = 1;
    if (count > 80 && type === 'Roses') {
        disc = 1 - discount[type];
    } else if (count > 90 && type === 'Dahlias') {
        disc = 1 - discount[type];
    } else if (count > 80 && type === 'Tulips') {
        disc = 1 - discount[type];
    } else if (count < 120 && type === "Narcissus") {
        disc = 1 + increase[type];
    } else if (count < 80 && type === 'Gladiolus') {
        disc = 1 + increase[type];
    }

    let finalPrice = totalPrice * disc;
    let moneyDiff = Math.abs(finalPrice - budget);
    if (budget >= finalPrice) {
        return `Hey, you have a great garden with ${count} ${type} and ${moneyDiff.toFixed(2)} leva left.`;
    }
    return `Not enough money, you need ${moneyDiff.toFixed(2)} leva more.`;
}
// console.log(newHouse(
//     [
//         "Roses",
//         "55",
//         "250"
//     ]
// ));
// console.log(newHouse(
//     [
//         "Tulips",
//         "88",
//         "260"
//     ]));

function fishingBoat(input = []) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);

    let rentShip = {
        Spring: 3000,
        Summer: 4200,
        Autumn: 4200,
        Winter: 2600
    };

    let discount = 0;
    if (fishers < 7) {
        discount = 0.1;
    } else if (fishers < 12) {
        discount = 0.15;
    } else {
        discount = 0.25;
    }

    let rent = rentShip[season];
    let price = rent * (1 - discount);
    if ((fishers % 2 === 0) && (season !== 'Autumn')) {
        // additional discount
        price *= 0.95;
    }
    
    let moneyDiff = Math.abs(budget - price);
    if (budget >= price) {
        return `Yes! You have ${moneyDiff.toFixed(2)} leva left.`;
    }
    return `Not enough money! You need ${moneyDiff.toFixed(2)} leva.`;
}
// console.log(fishingBoat(
//     [
//         "3600",
//         "Autumn",
//         "6"
//     ]
// ));
// console.log(fishingBoat(
//     [
//         "3000",
//         "Summer",
//         "11"
//     ]
// ));
// console.log(fishingBoat(
//     [
//         "2000",
//         "Winter",
//         "13"
//     ]
// ));

// console.log(fishingBoat(
//     [
//         "2000",
//         "Spring",
//         "10"
//     ]
// ));

function journey(input = []) {
    let budget = Number(input[0]);
    let season = input[1];
    let place = season === 'summer' ? 'Camp' : 'Hotel';

    let moneySpend = 0;
    let percent = 0;
    let destination = '';
    if (budget <= 100) {
        let obj = {
            summer: 0.3,
            winter: 0.7
        };
        destination = 'Bulgaria';
        percent = obj[season];
    } else if (budget <= 1000) {
        let obj = {
            summer: 0.4,
            winter: 0.8
        };
        percent = obj[season];
        destination = 'Balkans';
    } else if (budget > 1000) {
        place = 'Hotel';
        percent = 0.9;
        destination = 'Europe';
    }
    moneySpend = budget * percent;
    return `Somewhere in ${destination}\n${place} - ${moneySpend.toFixed(2)}`;
}

// console.log(journey(["50", "summer"]));
// console.log(journey(["75", "winter"]));
// console.log(journey(["312", "summer"]));
// console.log(journey(["678.53", "winter"]));
// console.log(journey(["1500", "summer"]));

function operationsBetweenNumbers(input = []) {
    let [num1, num2, operator] = [...input].map(x => isNaN(x) ? x : Number(x));
    let result = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return `Cannot divide ${num1} by zero`;
            }
            result = num1 / num2;
            break;
        case '%':
            if (num2 === 0) {
                return `Cannot divide ${num1} by zero`;
            }
            result = num1 % num2;
        default:
            break;
    }

    if (operator === '/') {
        return `${num1} / ${num2} = ${result.toFixed(2)}`;
    } else if (operator === '%') {
        return `${num1} % ${num2} = ${result}`
    }
    let isEven = result % 2 === 0;
    if (isEven) {
        return `${num1} ${operator} ${num2} = ${result} - even`;
    }
    return `${num1} ${operator} ${num2} = ${result} - odd`;
}

// console.log(operationsBetweenNumbers(
//     [
//         "10",
//         "12",
//         "+"
//     ]));
// console.log(operationsBetweenNumbers(
//     [
//         "10",
//         "1",
//         "-"
//     ]
// ));
// console.log(operationsBetweenNumbers(
//     [
//         "7",
//         "3",
//         "*"
//     ]
// ));
// console.log(operationsBetweenNumbers(
//     [
//         "123",
//         "12",
//         "/"
//     ]
// ));
// console.log(operationsBetweenNumbers(
//     [
//         "10",
//         "3",
//         "%"
//     ]
// ));
// console.log(operationsBetweenNumbers(
//     [
//         "112",
//         "0",
//         "/"
//     ]
// ));
// console.log(operationsBetweenNumbers(
//     [
//         "10",
//         "0",
//         "%"
//     ]
// ));

function hotelRoom(input = []) {
    let month = input[0];
    let nights = Number(input[1]);

    let studio = 0;
    let apartment = 0;
    let discountStudio = 0;
    let discountApartment = 0;

    if (month === 'May' || month === 'October') {
        studio = 50;
        apartment = 65;
        if (nights > 14) {
            discountStudio = 0.3;
        } else if (nights > 7) {
            discountStudio = 0.05;
        }
    } else if (month === 'June' || month === 'September') {
        studio = 75.2;
        apartment = 68.7;
        if (nights > 14) {
            discountStudio = 0.2;
        }
    } else if (month === 'July' || month === 'August') {
        studio = 76;
        apartment = 77;
    }

    if (nights > 14) {
        discountApartment = 0.1;
    }

    let totStudio = studio * nights * (1 - discountStudio);
    let totApartment = apartment * nights * (1 - discountApartment);
    return `Apartment: ${totApartment.toFixed(2)} lv.\nStudio: ${totStudio.toFixed(2)} lv.`;
}

// console.log(hotelRoom(
//     [
//         "May",
//         "15"
//     ]
// ));
// console.log(hotelRoom(
//     [
//         "June",
//         "14"
//     ]
// ));
// console.log(hotelRoom(
//     [
//         "August",
//         "20"
//     ]
// ));

function onTimeForTheExam(input = []) {
    let [examHour, examMinutes, arrivalHour, arrivalMinutes] = [...input].map(Number);
    let examMins = (examHour * 60) + examMinutes;
    let arrivalMins = (arrivalHour * 60) + arrivalMinutes;
    let timeDiffMins = examMins - arrivalMins;

    let output = [];
    if (timeDiffMins > 30) {
        output.push('Early');
        if (timeDiffMins > 59) {
            let h = Math.floor(timeDiffMins / 60);
            let min = timeDiffMins % 60;
            if (min < 10) {
                min = '0' + min;
            }
            output.push(`${h}:${min} hours before the start`);
        } else {
            output.push(`${timeDiffMins} minutes before the start`);
        }
    } else if (timeDiffMins >= 0) {
        output.push('On time');
        if (timeDiffMins !== 0) {
            output.push(`${timeDiffMins} minutes before the start`);
        }
    } else {
        output.push('Late');
        timeDiffMins = Math.abs(timeDiffMins);
        if (timeDiffMins > 59) {
            let h = Math.floor(timeDiffMins / 60);
            let min = timeDiffMins % 60;
            if (min < 10) {
                min = '0' + min;
            }
            output.push(`${h}:${min} hours after the start`);
        } else {
            output.push(`${timeDiffMins} minutes after the start`);
        }
    }
    return output.join('\n');
}

// console.log(onTimeForTheExam(
//     [
//         "9",
//         "30",
//         "9",
//         "50"
//     ]
// ));
// console.log(onTimeForTheExam(
//     [
//         "9",
//         "00",
//         "8",
//         "30"
//     ]
// ));
// console.log(onTimeForTheExam(
//     [
//         "16",
//         "00",
//         "15",
//         "00"
//     ]
// ));
// console.log(onTimeForTheExam(
//     [
//         "9",
//         "00",
//         "10",
//         "30"
//     ]
// ));
// console.log(onTimeForTheExam(
//     [
//         "14",
//         "00",
//         "13",
//         "55"
//     ]
// ));
// console.log(onTimeForTheExam(
//     [
//         "11",
//         "30",
//         "8",
//         "12"
//     ]
// ));
// console.log(onTimeForTheExam(
//     [
//         "10",
//         "00",
//         "10",
//         "00"
//     ]
// ));
// console.log(onTimeForTheExam(
//     [
//         "11",
//         "30",
//         "10",
//         "55"
//     ]
// ));
// console.log(onTimeForTheExam(
//     [
//         "11",
//         "30",
//         "12",
//         "29"
//     ]
// ));