function fishTank(input = []) {
    // input in cm, cm to dm
    let [length, width, height, percent] = [...input].map(Number);
    // parallelepiped, 1l = 1 dm3
    let capacityLitres = (length * width * height) / 1000; // volume and from cm3 to dm3
    let waterLitres = capacityLitres - ((capacityLitres * percent) / 100); // total - stuffInside
    return waterLitres;
}
// console.log(fishTank(["85", "75", "47", "17"]));
// console.log(fishTank(["105", "77", "89", "18.5"]));