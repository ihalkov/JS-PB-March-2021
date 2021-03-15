function sumSeconds(input = []) {
    // sec < 10  padding zero
    let totalSeconds = [...input]
        .map(Number)
        .reduce((acc, curr) => acc + curr);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return `${minutes}:${seconds}`;
}

// console.log(sumSeconds(
//     [
//         "35", "45", "44"
//     ]
// ));
// console.log(sumSeconds(
//     [
//         "22", "7", "34"
//     ]
// ));
// console.log(sumSeconds(
//     [
//         "50", "50", "49"
//     ]
// ));
// console.log(sumSeconds(
//     [
//         "14", "12", "10"
//     ]
// ));