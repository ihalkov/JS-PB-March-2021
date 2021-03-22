function dayOfWeek(input = []) {
    let num = Number(input[0]);
    let day = 'Error';
    let days = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    };
    if (days.hasOwnProperty(num)) {
        day = days[num];
    }
    return day;
}
// console.log(dayOfWeek((["1"])));
// console.log(dayOfWeek((["2"])));
// console.log(dayOfWeek((["3"])));
// console.log(dayOfWeek((["4"])));
// console.log(dayOfWeek((["5"])));
// console.log(dayOfWeek((["6"])));
// console.log(dayOfWeek((["7"])));
// console.log(dayOfWeek((["-1"])));

function weekendOrWorkingDay(input = []) {
    let str = input[0];
    let day = 'Error';
    let days = {
        'Monday': 'Working day',
        'Tuesday': 'Working day',
        'Wednesday': 'Working day',
        'Thursday': 'Working day',
        'Friday': 'Working day',
        'Saturday': 'Weekend',
        'Sunday': 'Weekend'
    };
    if (days.hasOwnProperty(str)) {
        day = days[str];
    }
    return day;
}

// console.log(weekendOrWorkingDay(['Monday']));
// console.log(weekendOrWorkingDay(['Sunday']));
// console.log(weekendOrWorkingDay(['April']));

function animalType(input = []) {
    let classAnimal = 'unknown';
    let type = input[0];
    switch (type) {
        case 'dog':
            classAnimal = 'mammal';
            break;
        case 'crocodile':
        case 'tortoise':
        case 'snake':
            classAnimal = 'reptile';
            break;
    }
    return classAnimal;
}
// console.log(animalType(['dog']));
// console.log(animalType(['snake']));
// console.log(animalType(['cat']));

function personalTitles(input = []) {
    let age = Number(input[0]);
    let gender = input[1];

    if (gender === 'm') {
        if (age >= 16) {
            return 'Mr.';
        }
        return 'Master';
    } else if (gender === 'f') {
        if (age >= 16) {
            return 'Ms.';
        }
        return 'Miss';
    }
}
// console.log(personalTitles(
//     [
//         "12", "f"
//     ]
// ));
// console.log(personalTitles(
//     [
//         "17", "m"
//     ]
// ));
// console.log(personalTitles(
//     [
//         "25", "f"
//     ]
// ));
// console.log(personalTitles(
//     [
//         "13.5", "m"
//     ]
// ));

function smallShop(input = []) {
    let [product, town, qty] = [...input];
    qty = Number(qty);

    let menu = {
        coffee: {
            Sofia: 0.5,
            Plovdiv: 0.4,
            Varna: 0.45
        },
        water: {
            Sofia: 0.8,
            Plovdiv: 0.7,
            Varna: 0.7
        },
        beer: {
            Sofia: 1.2,
            Plovdiv: 1.15,
            Varna: 1.1
        },
        sweets: {
            Sofia: 1.45,
            Plovdiv: 1.3,
            Varna: 1.35
        },
        peanuts: {
            Sofia: 1.6,
            Plovdiv: 1.5,
            Varna: 1.55
        }
    };

    let price = menu[product][town] * qty;
    return price;
}
// console.log(smallShop(
//     [
//         "coffee",
//         "Varna",
//         "2"
//     ]
// ));
// console.log(smallShop(
//     [
//         "peanuts",
//         "Plovdiv",
//         "1"
//     ]
// ));
// console.log(smallShop(
//     [
//         "beer",
//         "Sofia",
//         "6"
//     ]
// ));
// console.log(smallShop(
//     [
//         "water",
//         "Plovdiv",
//         "3"
//     ]
// ));
// console.log(smallShop(
//     [
//         "sweets",
//         "Sofia",
//         "2.23"
//     ]
// ));

function numberInRange(input = []) {
    let num = Number(input[0]);
    if (num >= -100 && num <= 100 && num !== 0) {
        return 'Yes';
    }
    return 'No';
}
// console.log(numberInRange(['-25']));
// console.log(numberInRange(['0']));
// console.log(numberInRange(['25']));

function workingHours(input = []) {
    let time = Number(input[0]);
    let day = input[1];
    if (time >= 10 && time <= 18 && day !== 'Sunday') {
        return 'open';
    }
    return 'closed';
}
// console.log(workingHours(
//     [
//         "11",
//         "Monday"
//     ]
// ));
// console.log(workingHours(
//     [
//         "19",
//         "Friday"
//     ]
// ));
// console.log(workingHours(
//     [
//         "11",
//         "Sunday"
//     ]
// ));

function cinemaTicket(input = []) {
    let day = input[0];
    // let str = 'Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday';
    // let str1 = '12	12	14	14	12	16	16';
    let prices = {
        Monday: 12,
        Tuesday: 12,
        Wednesday: 14,
        Thursday: 14,
        Friday: 12,
        Saturday: 16,
        Sunday: 16
    };

    return prices[day];
}
// console.log(cinemaTicket(['Monday']));
// console.log(cinemaTicket(['Friday']));
// console.log(cinemaTicket(['Sunday']));

function fruitOrVegetable(input = []) {
    let product = input[0];
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes'];
    let veggies = ['tomato', 'cucumber', 'pepper', 'carrot'];
    if (fruits.includes(product)) {
        return 'fruit';
    } else if (veggies.includes(product)) {
        return 'vegetable';
    }
    return 'unknown';
}
// console.log(fruitOrVegetable(['banana']));
// console.log(fruitOrVegetable(['apple']));
// console.log(fruitOrVegetable(['tomato']));
// console.log(fruitOrVegetable(['water']));

function invalidNumber(input = []) {
    let num = Number(input[0]);
    if ((num < 100 || num > 200) && num !== 0) {
        return 'invalid';
    }
    return '';
}

// console.log(invalidNumber(['75']));
// console.log(invalidNumber(['150']));
// console.log(invalidNumber(['220']));
// console.log(invalidNumber(['199']));
// console.log(invalidNumber(['-1']));
// console.log(invalidNumber(['100']));
// console.log(invalidNumber(['200']));
// console.log(invalidNumber(['0']));


function fruitShop(input = []) {
    let [fruit, day, qty] = [...input].map(x => isNaN(x) ? x : Number(x));
    let workdaysPrices = {
        banana: 2.50,
        apple: 1.20,
        orange: 0.85,
        grapefruit: 1.45,
        kiwi: 2.70,
        pineapple: 5.50,
        grapes: 3.85
    };

    let weekendPrices = {
        banana: 2.70,
        apple: 1.25,
        orange: 0.90,
        grapefruit: 1.60,
        kiwi: 3.00,
        pineapple: 5.60,
        grapes: 4.20
    };

    let workdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    let weekend = ['Saturday', 'Sunday'];

    if (weekend.includes(day) && weekendPrices.hasOwnProperty(fruit)) {
        let price = weekendPrices[fruit];
        let result = price * qty
        return result.toFixed(2);
    } else if (workdays.includes(day) && workdaysPrices.hasOwnProperty(fruit)) {
        let price = workdaysPrices[fruit];
        let result = price * qty;
        return result.toFixed(2);
    }
    return 'error';
}
// console.log(fruitShop(
//     [
//         "apple",
//         "Tuesday",
//         "2"
//     ]));
// console.log(fruitShop(
//     [
//         "orange",
//         "Sunday",
//         "3"
//     ]));
// console.log(fruitShop(
//     [
//         "kiwi",
//         "Monday",
//         "2.5"
//     ]
// ));
// console.log(fruitShop(
//     [
//         "grapes",
//         "Saturday",
//         "0.5"
//     ]
// ));
// console.log(fruitShop(
//     [
//         "tomato",
//         "Monday",
//         "0.5"
//     ]
// ));

function tradeCommissions(input = []) {
    let town = input[0];
    let sells = Number(input[1]);

    let belowEqual500 = {
        Sofia: 0.05,
        Varna: 0.045,
        Plovdiv: 0.055
    };
    let belowEqual1000 = {
        Sofia: 0.07,
        Varna: 0.075,
        Plovdiv: 0.08
    };
    let belowEqual10000 = {
        Sofia: 0.08,
        Varna: 0.1,
        Plovdiv: 0.12
    }
    let above10000 = {
        Sofia: 0.12,
        Varna: 0.13,
        Plovdiv: 0.145
    }
    let towns = ['Sofia', 'Varna', 'Plovdiv'];

    if (sells > 10000 && towns.includes(town)) {
        let commission = above10000[town] * sells;
        return commission.toFixed(2);
    } else if (sells > 1000 && towns.includes(town)) {
        let commission = belowEqual10000[town] * sells;
        return commission.toFixed(2);
    } else if (sells > 500 && towns.includes(town)) {
        let commission = belowEqual1000[town] * sells;
        return commission.toFixed(2);
    } else if (sells >= 0 && sells <= 500 && towns.includes(town)) {
        let commission = belowEqual500[town] * sells;
        return commission.toFixed(2);
    }
    return 'error';
}
// console.log(tradeCommissions(['Sofia', '1500']));
// console.log(tradeCommissions(['Plovdiv', '499.99']));
// console.log(tradeCommissions(['Varna', '3874.50']));
// console.log(tradeCommissions(['Kaspichan', '-50']));

function skiTrip(input = []) {
    let [days, typeRoom, score] = [...input].map(x => isNaN(x) ? x : Number(x));
    let nights = days - 1;

    let prices = {
        "room for one person": 18.00,
        "apartment": 25.00,
        "president apartment": 35.00
    };

    let total = prices[typeRoom] * nights;
    let discount = total * (1 - getDiscountPercent(days, typeRoom));

    if (score === 'positive') {
        return (discount * 1.25).toFixed(2);
    }
    return (discount * 0.9).toFixed(2);

    function getDiscountPercent(days, typeRoom) {
        if (days < 10) {
            let disc = {
                "room for one person": 0,
                "apartment": 0.3,
                "president apartment": 0.1
            };
            return disc[typeRoom];
        } else if (days < 15) {
            let disc = {
                "room for one person": 0,
                "apartment": 0.35,
                "president apartment": 0.15
            };
            return disc[typeRoom];
        } else if (days > 15) {
            let disc = {
                "room for one person": 0,
                "apartment": 0.5,
                "president apartment": 0.2
            };
            return disc[typeRoom];
        }
    }
}
// console.log(skiTrip(
//     [
//         "14",
//         "apartment",
//         "positive"
//     ]
// ));
// console.log(skiTrip(
//     [
//         "30",
//         "president apartment",
//         "negative"
//     ]
// ));