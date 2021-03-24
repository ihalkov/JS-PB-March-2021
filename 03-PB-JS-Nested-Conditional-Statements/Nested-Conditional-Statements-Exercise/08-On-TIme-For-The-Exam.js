function onTimeForTheExam(input = []) {
    let [examHour, examMinutes, arrivalHour, arrivalMinutes] = [...input].map(Number);
    let examMins = (examHour * 60) + examMinutes;
    let arrivalMins = (arrivalHour * 60) + arrivalMinutes;
    let timeDiffMins = examMins - arrivalMins;

    let output = [];
    if (timeDiffMins > 30) {
        output.push('Early');
        if (timeDiffMins > 59) {
            let h = Math.floor(timeDiffMins / 60);
            let min = timeDiffMins % 60;
            if (min < 10) {
                min = '0' + min;
            }
            output.push(`${h}:${min} hours before the start`);
        } else {
            output.push(`${timeDiffMins} minutes before the start`);
        }
    } else if (timeDiffMins >= 0) {
        output.push('On time');
        if (timeDiffMins !== 0) {
            output.push(`${timeDiffMins} minutes before the start`);
        }
    } else {
        output.push('Late');
        timeDiffMins = Math.abs(timeDiffMins);
        if (timeDiffMins > 59) {
            let h = Math.floor(timeDiffMins / 60);
            let min = timeDiffMins % 60;
            if (min < 10) {
                min = '0' + min;
            }
            output.push(`${h}:${min} hours after the start`);
        } else {
            output.push(`${timeDiffMins} minutes after the start`);
        }
    }
    return output.join('\n');
}

// console.log(onTimeForTheExam(
//     [
//         "9",
//         "30",
//         "9",
//         "50"
//     ]
// ));
// console.log(onTimeForTheExam(
//     [
//         "9",
//         "00",
//         "8",
//         "30"
//     ]
// ));
// console.log(onTimeForTheExam(
//     [
//         "16",
//         "00",
//         "15",
//         "00"
//     ]
// ));
// console.log(onTimeForTheExam(
//     [
//         "9",
//         "00",
//         "10",
//         "30"
//     ]
// ));
// console.log(onTimeForTheExam(
//     [
//         "14",
//         "00",
//         "13",
//         "55"
//     ]
// ));
// console.log(onTimeForTheExam(
//     [
//         "11",
//         "30",
//         "8",
//         "12"
//     ]
// ));
// console.log(onTimeForTheExam(
//     [
//         "10",
//         "00",
//         "10",
//         "00"
//     ]
// ));
// console.log(onTimeForTheExam(
//     [
//         "11",
//         "30",
//         "10",
//         "55"
//     ]
// ));
// console.log(onTimeForTheExam(
//     [
//         "11",
//         "30",
//         "12",
//         "29"
//     ]
// ));