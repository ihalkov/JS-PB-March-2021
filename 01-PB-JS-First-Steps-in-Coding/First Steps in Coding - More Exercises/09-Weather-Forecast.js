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