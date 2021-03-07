function usdToBgn(input = []) {
    let usd = Number(input[0]);
    return usd * 1.79549;
}

// console.log(usdToBgn(['22']));
// console.log(usdToBgn(['100']));
// console.log(usdToBgn(['12.5']));

function radToDeg(input = []) {
    let rad = Number(input[0]);
    let deg = (rad * 180) / Math.PI;
    return Math.round(deg);
}

// console.log(radToDeg(["3.1416"]));
// console.log(radToDeg(["6.2832"]));
// console.log(radToDeg(["0.7854"]));
// console.log(radToDeg(["0.5236"]));

function depositCalc(input = []) {
    let [deposit, period, interest] = [...input].map(Number);
    // let deposit = Number(input[0]);
    // let period = Number(input[1]);
    // let interest = Number(input[3]);
    let monthlyInterest = ((deposit * interest) / 100) / 12; // (deposit * interest) / 100 to have better rounding
    let endSum = deposit + (period * monthlyInterest);
    console.log(endSum);
}

// console.log(depositCalc(["200", "3", "5.7"]));
// console.log(depositCalc((["2350", "6", "7"])));


function vacationBooksList(input = []) {
    let [totalPages, pagesPerHour, days] = [...input].map(Number);
    let hoursNeeded = totalPages / pagesPerHour;
    let readingDaily = hoursNeeded / days;
    return readingDaily;
}
// console.log(vacationBooksList(["212", "20", "2"]));
// console.log(vacationBooksList((["432", "15", "4"])));

function birthdayParty(input = []) {
    //•	Торта  – цената ѝ е 20% от наема на залата
    // •	Напитки – цената им е 45% по-малко от тази на тортата
    // •	Аниматор – цената му е 1/3 от цената за наема на залата
    let rent = Number(input[0]);
    let cakePrice = rent * 0.2;
    let drinksPrice = cakePrice * 0.55; // 45% less, so is 55% of cakePrice ;)
    let animatorPrice = rent / 3;

    let budgetNeeded = rent + cakePrice + drinksPrice + animatorPrice;
    return budgetNeeded;
}
// console.log(birthdayParty(["2250"]));
// console.log(birthdayParty(["3720"]));

function charityCampaign(input = []) {
    let [days, chefs, cakes, waffles, pancakes] = [...input].map(Number);
    let cakesPrice = 45 * cakes;
    let wafflesPrice = 5.8 * waffles;
    let pancakesPrice = 3.2 * pancakes;

    let moneyDaily = chefs * (cakesPrice + wafflesPrice + pancakesPrice);
    let totalSum = days * moneyDaily;
    let charityMoney = totalSum * (7 / 8); // expenses 1/8 from total, money for charity 7/8
    return charityMoney;
}

// console.log(charityCampaign(["23", "8", "14", "30", "16"]));
// console.log(charityCampaign(["131", "5", "9", "33", "46"]));

function fruitMarket(input = []) {
    let [strawberryPrice, bananas, oranges, raspberries, berries] = [...input].map(Number);
    let raspberriesPrice = strawberryPrice / 2;
    let orangesPrice = raspberriesPrice * 0.6; // 40% less
    let bananasPrice = raspberriesPrice * 0.2; // 80% less

    let moneyNeeded = (strawberryPrice * berries) + (bananas * bananasPrice) +
        (oranges * orangesPrice) + (raspberries * raspberriesPrice);
    return moneyNeeded;
}
// console.log(fruitMarket(["48", "10", "3.3", "6.5", "1.7"]));
// console.log(fruitMarket(["63.5", "3.57", "6.35", "8.15", "2.5"]));

function fishTank(input = []) {
    // input in cm, cm to dm
    let [length, width, height, percent] = [...input].map(Number);
    // parallelepiped, 1l = 1 dm3
    let capacityLitres = (length * width * height) / 1000; // volume and from cm3 to dm3
    let waterLitres = capacityLitres - ((capacityLitres * percent) / 100); // total - stuffInside
    return waterLitres;
}
// console.log(fishTank(["85", "75", "47", "17"]));
// console.log(fishTank(["105", "77", "89", "18.5"]));