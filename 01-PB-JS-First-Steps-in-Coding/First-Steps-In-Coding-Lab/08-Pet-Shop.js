function petShop(input = []) {
    input.map(Number);
    let [numDogs, rest] = [...input];
    let totalPrice = (numDogs * 2.5) + (rest * 4);
    return `${totalPrice} lv.`;
}
// console.log(petShop(["5", "4"]));
// console.log(petShop(["13", "9"]));