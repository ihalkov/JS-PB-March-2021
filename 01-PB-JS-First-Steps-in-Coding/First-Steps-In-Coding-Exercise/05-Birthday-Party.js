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