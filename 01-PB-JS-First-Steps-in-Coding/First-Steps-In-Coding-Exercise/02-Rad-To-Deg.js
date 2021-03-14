function radToDeg(input = []) {
    let rad = Number(input[0]);
    let deg = (rad * 180) / Math.PI;
    return Math.round(deg);
}

// console.log(radToDeg(["3.1416"]));
// console.log(radToDeg(["6.2832"]));
// console.log(radToDeg(["0.7854"]));
// console.log(radToDeg(["0.5236"]));