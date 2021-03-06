function yardGreening(input = []) {
    // Цената на един кв. м. е 7.61лв със ДДС
    // 18% discount from total price
    let area = Number(input[0]);
    let price = area * 7.61;
    let discount = price * 0.18;
    let finalPrice = price * 0.82;

    return `The final price is: ${finalPrice} lv.\nThe discount is: ${discount} lv.`;
}
// console.log(yardGreening(["550"]));
// console.log(yardGreening(["150"]));