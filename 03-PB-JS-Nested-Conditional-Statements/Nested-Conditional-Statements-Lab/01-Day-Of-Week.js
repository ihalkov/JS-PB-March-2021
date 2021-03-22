function dayOfWeek(input = []) {
    let num = Number(input[0]);
    let day = 'Error';
    let days = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    };
    if (days.hasOwnProperty(num)) {
        day = days[num];
    }
    return day;
}
// console.log(dayOfWeek((["1"])));
// console.log(dayOfWeek((["2"])));
// console.log(dayOfWeek((["3"])));
// console.log(dayOfWeek((["4"])));
// console.log(dayOfWeek((["5"])));
// console.log(dayOfWeek((["6"])));
// console.log(dayOfWeek((["7"])));
// console.log(dayOfWeek((["-1"])));