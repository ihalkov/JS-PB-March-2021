function areaOfFigures(input = []) {
    // square, rectangle, circle или triangle
    let type = input.shift();
    let [arg1, arg2] = [...input].map(Number);
    let area = 0;
    switch (type) {
        case 'square':
            area = arg1 ** 2;
            break;
        case 'rectangle':
            area = arg1 * arg2;
            break;
        case 'circle':
            area = Math.PI * arg1 ** 2;
            break;
        case 'triangle':
            area = (arg1 * arg2) / 2;
            break;
    }
    return area.toFixed(3);
}
// console.log(areaOfFigures(["square", "5"]));
// console.log(areaOfFigures(["rectangle", "7", "2.5"]));
// console.log(areaOfFigures(["circle", "6"]));
// console.log(areaOfFigures(["triangle", "4.5", "20"]));