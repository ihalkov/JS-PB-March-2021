function circleAreaAndPerimeter(input = []) {
    let radius = Number(input[0]);
    let perimeter = 2 * Math.PI * radius;
    let area = Math.PI * radius ** 2;
    return [area.toFixed(2), perimeter.toFixed(2)].join('\n');
}
// console.log(circleAreaAndPerimeter([3]));
// console.log(circleAreaAndPerimeter([4.5]));