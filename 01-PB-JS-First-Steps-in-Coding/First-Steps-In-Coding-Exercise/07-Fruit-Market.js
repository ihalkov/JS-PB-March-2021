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