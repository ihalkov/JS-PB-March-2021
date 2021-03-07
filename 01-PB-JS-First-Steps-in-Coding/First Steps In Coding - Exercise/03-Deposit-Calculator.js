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