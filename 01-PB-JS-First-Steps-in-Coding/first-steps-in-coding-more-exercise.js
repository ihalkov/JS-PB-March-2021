function trapezoidArea(input = []) {
    let [b1, b2, h] = [...input].map(Number);
    let area = ((b1 + b2) * h) / 2;
    return area.toFixed(2);
}

// console.log(trapezoidArea([8, 13, 7]));

function triangleArea(input = []) {
    let [a, h] = [...input].map(Number);
    let area = (a * h) / 2;
    return area.toFixed(2);
}
// console.log(triangleArea([20, 30]));
// console.log(triangleArea([15, 35]));
// console.log(triangleArea([7.75, 8.45]));
// console.log(triangleArea([1.23456, 4.56789]));

function celsiusToFahrenheit(input = []) {
    // (0°C × 9/5) + 32 = 32°F
    let deg = Number(input[0]);
    let fahrenheit = (deg * (9 / 5)) + 32;
    return fahrenheit.toFixed(2);
}

// console.log(celsiusToFahrenheit([25]));
// console.log(celsiusToFahrenheit([0]));
// console.log(celsiusToFahrenheit([32.3]));

function vegetableMarket(input = []) {
    let [veggiesPrice, fruitsPrice, veggiesKg, fruitsKg] = [...input].map(Number);
    let profit = (veggiesPrice * veggiesKg) + (fruitsPrice * fruitsKg);
    let profitEur = profit / 1.94;
    return profitEur.toFixed(2);
}
// console.log(vegetableMarket([0.194, 19.4, 10, 10]));
// console.log(vegetableMarket([1.5, 2.5, 10, 10]));

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

function fishLand(input = []) {
    let [skumriqPrice, cacaPrice, palamud, safrid, midi] = [...input].map(Number);
    // •	Паламуд – 60% по-скъп от скумрията
    // •	Сафрид – 80% по-скъп от цацата
    // •	Миди – 7.50 лв. за килограм
    let palamudPrice = skumriqPrice * 1.6; // 60% more
    let safridPrice = cacaPrice * 1.8; // 80% more
    let midiPrice = 7.5;

    let totalPrice = (palamudPrice * palamud) + (safridPrice * safrid) + (midiPrice * midi);
    return totalPrice.toFixed(2);
}
// console.log(fishLand([6.90, 4.20, 1.5, 2.5, 1]));
// console.log(fishLand([5.55, 3.57, 4.3, 3.6, 7]));
// console.log(fishLand([7.79, 5.35, 9.3, 0, 0]));

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

function circleAreaAndPerimeter(input = []) {
    let radius = Number(input[0]);
    let perimeter = 2 * Math.PI * radius;
    let area = Math.PI * radius ** 2;
    return [area.toFixed(2), perimeter.toFixed(2)].join('\n');
}
// console.log(circleAreaAndPerimeter([3]));
// console.log(circleAreaAndPerimeter([4.5]));

function weatherForecast(input = []) {
    let current = input[0];
    if (current === 'sunny') {
        return "It's warm outside!";
    }
    return "It's cold outside!";
}

// console.log(weatherForecast(['sunny']));
// console.log(weatherForecast(['cloudy']));
// console.log(weatherForecast(['snowy']));

function weatherForecast2(input = []) {
    let degrees = Number(input[0]);
    return getWeather(degrees);

    function getWeather(deg) {  
        if (deg < 5 || deg > 35) {
            return 'unknown';
        } else if (deg <= 11.9) {
            return 'Cold';
        } else if (deg <= 14.9) {
            return 'Cool';
        } else if (deg <= 20) {
            return 'Mild';
        } else if (deg <= 25.9) {
            return 'Warm';
        } else if (deg <= 35) {
            return 'Hot';
        }
    }
}

// console.log(weatherForecast2([16.5]));
// console.log(weatherForecast2([8]));
// console.log(weatherForecast2([22.4]));
// console.log(weatherForecast2([26]));
// console.log(weatherForecast2([0]));