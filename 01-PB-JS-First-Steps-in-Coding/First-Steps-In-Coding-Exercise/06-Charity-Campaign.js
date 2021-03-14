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