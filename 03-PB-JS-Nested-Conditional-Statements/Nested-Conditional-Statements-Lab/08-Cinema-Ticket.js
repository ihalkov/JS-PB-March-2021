function cinemaTicket(input = []) {
    let day = input[0];
    // let str = 'Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday';
    // let str1 = '12	12	14	14	12	16	16';
    let prices = {
        Monday: 12,
        Tuesday: 12,
        Wednesday: 14,
        Thursday: 14,
        Friday: 12,
        Saturday: 16,
        Sunday: 16
    };

    return prices[day];
}
// console.log(cinemaTicket(['Monday']));
// console.log(cinemaTicket(['Friday']));
// console.log(cinemaTicket(['Sunday']));