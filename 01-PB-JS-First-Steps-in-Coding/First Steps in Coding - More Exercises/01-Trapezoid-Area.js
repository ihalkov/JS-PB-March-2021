function trapezoidArea(input = []) {
    let [b1, b2, h] = [...input].map(Number);
    let area = ((b1 + b2) * h) / 2;
    return area.toFixed(2);
}

// console.log(trapezoidArea([8, 13, 7]));