function personalTitles(input = []) {
    let age = Number(input[0]);
    let gender = input[1];

    if (gender === 'm') {
        if (age >= 16) {
            return 'Mr.';
        }
        return 'Master';
    } else if (gender === 'f') {
        if (age >= 16) {
            return 'Ms.';
        }
        return 'Miss';
    }
}
// console.log(personalTitles(
//     [
//         "12", "f"
//     ]
// ));
// console.log(personalTitles(
//     [
//         "17", "m"
//     ]
// ));
// console.log(personalTitles(
//     [
//         "25", "f"
//     ]
// ));
// console.log(personalTitles(
//     [
//         "13.5", "m"
//     ]
// ));