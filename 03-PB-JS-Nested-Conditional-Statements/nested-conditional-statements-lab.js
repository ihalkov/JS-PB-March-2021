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
    //     град / продукт	coffee	water	beer	sweets	peanuts
    // Sofia	0.50	0.80	1.20	1.45	1.60
    // Plovdiv	0.40	0.70	1.15	1.30	1.50
    // Varna	0.45	0.70	1.10	1.35	1.55
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



console.log(dayOfWeek());