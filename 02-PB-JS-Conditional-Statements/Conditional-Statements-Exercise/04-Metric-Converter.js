function metricConverter(input = []) {
    // входна единица	изходна единица
    // 1 meter (m)	1000 millimeters (mm)
    // 1 meter (m)	100 centimeters (cm)
    let [num, from, to] = [...input];
    num = Number(num);

    if (from === 'mm') {
        num /= 1000;
    } else if (from === 'cm') {
        num /= 100;
    }

    if (to === 'mm') {
        num *= 1000;
    } else if (to === 'cm') {
        num *= 100;
    }
    return num.toFixed(3);
}

// console.log(metricConverter(["12","mm","m"]));
// console.log(metricConverter(["150","m","cm"]));
// console.log(metricConverter(["45","cm","mm"]));