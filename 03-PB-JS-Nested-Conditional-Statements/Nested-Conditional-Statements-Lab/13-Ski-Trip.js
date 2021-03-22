function skiTrip(input = []) {
    let [days, typeRoom, score] = [...input].map(x => isNaN(x) ? x : Number(x));
    let nights = days - 1;

    let prices = {
        "room for one person": 18.00,
        "apartment": 25.00,
        "president apartment": 35.00
    };

    let total = prices[typeRoom] * nights;
    let discount = total * (1 - getDiscountPercent(days, typeRoom));

    if (score === 'positive') {
        return (discount * 1.25).toFixed(2);
    }
    return (discount * 0.9).toFixed(2);

    function getDiscountPercent(days, typeRoom) {
        if (days < 10) {
            let disc = {
                "room for one person": 0,
                "apartment": 0.3,
                "president apartment": 0.1
            };
            return disc[typeRoom];
        } else if (days < 15) {
            let disc = {
                "room for one person": 0,
                "apartment": 0.35,
                "president apartment": 0.15
            };
            return disc[typeRoom];
        } else if (days > 15) {
            let disc = {
                "room for one person": 0,
                "apartment": 0.5,
                "president apartment": 0.2
            };
            return disc[typeRoom];
        }
    }
}
// console.log(skiTrip(
//     [
//         "14",
//         "apartment",
//         "positive"
//     ]
// ));
// console.log(skiTrip(
//     [
//         "30",
//         "president apartment",
//         "negative"
//     ]
// ));