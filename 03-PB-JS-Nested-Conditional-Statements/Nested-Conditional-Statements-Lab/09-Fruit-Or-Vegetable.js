function fruitOrVegetable(input = []) {
    let product = input[0];
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes'];
    let veggies = ['tomato', 'cucumber', 'pepper', 'carrot'];
    if (fruits.includes(product)) {
        return 'fruit';
    } else if (veggies.includes(product)) {
        return 'vegetable';
    }
    return 'unknown';
}
// console.log(fruitOrVegetable(['banana']));
// console.log(fruitOrVegetable(['apple']));
// console.log(fruitOrVegetable(['tomato']));
// console.log(fruitOrVegetable(['water']));