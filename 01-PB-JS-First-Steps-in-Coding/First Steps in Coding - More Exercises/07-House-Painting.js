function housePainting(input = []) {
    let [x, y, h] = [...input].map(Number);
    // green 1l = 3.4m2, red 1l = 4.3m2
    let greenPaint = 1 / 3.4; // l/m2
    let redPaint = 1 / 4.3;

    // walls
    let wallsArea = getWallsArea(x, y);
    let greenLiters = wallsArea * greenPaint;

    // roof
    let roofArea = getRoofArea(x, y);
    let redLiters = roofArea * redPaint;
    return [greenLiters.toFixed(2), redLiters.toFixed(2)].join('\n');

    function getRoofArea(x, y) {
        let rectangleSides = rectangleArea(x, y) * 2;
        let triangleSides = ((x * h) / 2) * 2;
        return rectangleSides + triangleSides;
    }

    function getWallsArea(x, y) {
        let backWall = squareArea(x);
        let doorArea = rectangleArea(1.2, 2);
        let frontWall = backWall - doorArea;
        let sideWalls = (rectangleArea(x, y) - squareArea(1.5)) * 2;
        return backWall + frontWall + sideWalls;
    }

    function squareArea(x) {
        return x * x;
    }
    function rectangleArea(x, y) {
        return x * y;
    }
}
// console.log(housePainting([6, 10, 5.2]));
// console.log(housePainting([ 10.25, 15.45, 8.88]));