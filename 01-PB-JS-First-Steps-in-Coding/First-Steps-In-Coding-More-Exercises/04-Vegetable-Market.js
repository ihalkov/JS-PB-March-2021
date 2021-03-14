function vegetableMarket(input = []) {
    let [veggiesPrice, fruitsPrice, veggiesKg, fruitsKg] = [...input].map(Number);
    let profit = (veggiesPrice * veggiesKg) + (fruitsPrice * fruitsKg);
    let profitEur = profit / 1.94;
    return profitEur.toFixed(2);
}
// console.log(vegetableMarket([0.194, 19.4, 10, 10]));
// console.log(vegetableMarket([1.5, 2.5, 10, 10]));