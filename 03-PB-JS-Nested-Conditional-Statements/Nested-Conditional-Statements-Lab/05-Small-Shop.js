function smallShop(input = []) {
    let [product, town, qty] = [...input];
    qty = Number(qty);

    let menu = {
        coffee: {
            Sofia: 0.5,
            Plovdiv: 0.4,
            Varna: 0.45
        },
        water: {
            Sofia: 0.8,
            Plovdiv: 0.7,
            Varna: 0.7
        },
        beer: {
            Sofia: 1.2,
            Plovdiv: 1.15,
            Varna: 1.1
        },
        sweets: {
            Sofia: 1.45,
            Plovdiv: 1.3,
            Varna: 1.35
        },
        peanuts: {
            Sofia: 1.6,
            Plovdiv: 1.5,
            Varna: 1.55
        }
    };

    let price = menu[product][town] * qty;
    return price;
}
// console.log(smallShop(
//     [
//         "coffee",
//         "Varna",
//         "2"
//     ]
// ));
// console.log(smallShop(
//     [
//         "peanuts",
//         "Plovdiv",
//         "1"
//     ]
// ));
// console.log(smallShop(
//     [
//         "beer",
//         "Sofia",
//         "6"
//     ]
// ));
// console.log(smallShop(
//     [
//         "water",
//         "Plovdiv",
//         "3"
//     ]
// ));
// console.log(smallShop(
//     [
//         "sweets",
//         "Sofia",
//         "2.23"
//     ]
// ));