function triangleArea(input = []) {
    let [a, h] = [...input].map(Number);
    let area = (a * h) / 2;
    return area.toFixed(2);
}
// console.log(triangleArea([20, 30]));
// console.log(triangleArea([15, 35]));
// console.log(triangleArea([7.75, 8.45]));
// console.log(triangleArea([1.23456, 4.56789]));