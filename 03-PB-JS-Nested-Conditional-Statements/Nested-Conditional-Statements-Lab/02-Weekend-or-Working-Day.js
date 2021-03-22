function weekendOrWorkingDay(input = []) {
    let str = input[0];
    let day = 'Error';
    let days = {
        'Monday': 'Working day',
        'Tuesday': 'Working day',
        'Wednesday': 'Working day',
        'Thursday': 'Working day',
        'Friday': 'Working day',
        'Saturday': 'Weekend',
        'Sunday': 'Weekend'
    };
    if (days.hasOwnProperty(str)) {
        day = days[str];
    }
    return day;
}

// console.log(weekendOrWorkingDay(['Monday']));
// console.log(weekendOrWorkingDay(['Sunday']));
// console.log(weekendOrWorkingDay(['April']));