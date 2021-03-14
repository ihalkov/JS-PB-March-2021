function trainingLab(input = []) {
    let [height, width] = [...input].map(Number);
    width = width * 100; // to centimeters
    height = height * 100;
    // 3 <= height <= width <= 100 m
    let workplaceWidth = 70;
    let workplaceHeight = 120;
    let corridorWidth = 100; // at least 100

    let desksInLine = Math.floor((width - corridorWidth) / workplaceWidth);
    let rows = Math.floor(height / workplaceHeight);
    let workPlaces = (rows * desksInLine) - 3;
    return workPlaces;
}
// console.log(trainingLab([15, 8.9]));
// console.log(trainingLab([8.4, 5.2]));