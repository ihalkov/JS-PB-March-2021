function timePlus15Minutes(input = []) {
    let [hour, minutes] = [...input].map(Number);
    // Часовете винаги са между 0 и 23
    // , а минутите винаги са между 0 и 59
    // Минутите се изписват винаги с по две цифри, с водеща нула, когато е необход(имо. 

    let totalMinutes = (hour * 60) + minutes + 15;
    hour = Math.floor(totalMinutes / 60);
    minutes = totalMinutes % 60;

    if (hour > 23) {
        hour = hour % 24;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    return `${hour}:${minutes}`;
}

// console.log(timePlus15Minutes(["1", "46"]));
// console.log(timePlus15Minutes(["0", "01"]));
// console.log(timePlus15Minutes(["23", "59"]));
// console.log(timePlus15Minutes(["11", "08"]));
// console.log(timePlus15Minutes(["12", "49"]));