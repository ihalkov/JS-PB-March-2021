function transportPrice(input = []) {
    let [distance, tariff] = [...input];
    distance = Number(distance);

    if (distance >= 100) {
        return (distance * 0.06).toFixed(2);
    } else if (distance >= 20) {
        return (distance * 0.09).toFixed(2);
    } else if (tariff === 'day') {
        return ((distance * 0.79) + 0.7).toFixed(2);
    }
    return ((distance * 0.9) + 0.7).toFixed(2);;
}
// console.log(transportPrice(
//     [
//         '5', 'day'
//     ]
// ));
// console.log(transportPrice(
//     [
//         '7', 'night'
//     ]
// ));
// console.log(transportPrice(
//     [
//         '25', 'day'
//     ]
// ));
// console.log(transportPrice(
//     [
//         '180', 'night'
//     ]
// ));