function hotelRoom(input = []) {
    let month = input[0];
    let nights = Number(input[1]);

    let studio = 0;
    let apartment = 0;
    let discountStudio = 0;
    let discountApartment = 0;

    if (month === 'May' || month === 'October') {
        studio = 50;
        apartment = 65;
        if (nights > 14) {
            discountStudio = 0.3;
        } else if (nights > 7) {
            discountStudio = 0.05;
        }
    } else if (month === 'June' || month === 'September') {
        studio = 75.2;
        apartment = 68.7;
        if (nights > 14) {
            discountStudio = 0.2;
        }
    } else if (month === 'July' || month === 'August') {
        studio = 76;
        apartment = 77;
    }

    if (nights > 14) {
        discountApartment = 0.1;
    }

    let totStudio = studio * nights * (1 - discountStudio);
    let totApartment = apartment * nights * (1 - discountApartment);
    return `Apartment: ${totApartment.toFixed(2)} lv.\nStudio: ${totStudio.toFixed(2)} lv.`;
}

// console.log(hotelRoom(
//     [
//         "May",
//         "15"
//     ]
// ));
// console.log(hotelRoom(
//     [
//         "June",
//         "14"
//     ]
// ));
// console.log(hotelRoom(
//     [
//         "August",
//         "20"
//     ]
// ));