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