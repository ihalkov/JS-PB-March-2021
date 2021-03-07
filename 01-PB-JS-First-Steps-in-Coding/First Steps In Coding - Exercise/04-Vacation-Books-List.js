function vacationBooksList(input = []) {
    let [totalPages, pagesPerHour, days] = [...input].map(Number);
    let hoursNeeded = totalPages / pagesPerHour;
    let readingDaily = hoursNeeded / days;
    return readingDaily;
}
// console.log(vacationBooksList(["212", "20", "2"]));
// console.log(vacationBooksList((["432", "15", "4"])));