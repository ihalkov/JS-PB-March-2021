function flowerShop(input = []) {
    let [magnolii, ziumbiuli, roses, cactuses, presentPrice] = [...input].map(Number);
    let totalMoney = (magnolii * 3.25) + (ziumbiuli * 4) + (roses * 3.5) + (cactuses * 8);
    let profit = totalMoney * 0.95;
    let moneyDiff = Math.abs(presentPrice - profit);
    if (profit < presentPrice) {
        return `She will have to borrow ${Math.ceil(moneyDiff)} leva.`;
    }
    return `She is left with ${Math.floor(moneyDiff)} leva.`;
}
// console.log(flowerShop(
//     [
//         '2',
//         '3',
//         '5',
//         '1',
//         '50'
//     ]
// ));
// console.log(flowerShop(
//     [
//         '15',
//         '7',
//         '5',
//         '10',
//         '100'
//     ]
// ));