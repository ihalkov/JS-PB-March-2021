function celsiusToFahrenheit(input = []) {
    // (0°C × 9/5) + 32 = 32°F
    let deg = Number(input[0]);
    let fahrenheit = (deg * (9 / 5)) + 32;
    return fahrenheit.toFixed(2);
}

// console.log(celsiusToFahrenheit([25]));
// console.log(celsiusToFahrenheit([0]));
// console.log(celsiusToFahrenheit([32.3]));