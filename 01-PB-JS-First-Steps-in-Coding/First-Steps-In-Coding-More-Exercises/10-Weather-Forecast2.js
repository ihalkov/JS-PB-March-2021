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