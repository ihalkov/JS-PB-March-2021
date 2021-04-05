function oldBooks(input = []) {
    let favBook = input[0];
    let ind = 1;
    let currBook = input[ind];
    let books = 0;
    while (currBook !== 'No More Books') {
        if (currBook === favBook) {
            return `You checked ${books} books and found it.`;
        }
        ind += 1;
        books += 1;
        currBook = input[ind];
    }
    return `The book you search is not here!\nYou checked ${books} books.`;
}

// console.log(oldBooks(
//     [
//         "Troy",
//         "Stronger",
//         "Life Style",
//         "Troy"
//     ]
// ));
// console.log(oldBooks(
//     [
//         "The Spot",
//         "Hunger Games",
//         "Harry Potter",
//         "Torronto",
//         "Spotify",
//         "No More Books"
//     ]
// ));
// console.log(oldBooks(
//     [
//         "Bourne",
//         "True Story",
//         "Forever",
//         "More Space",
//         "The Girl",
//         "Spaceship",
//         "Strongest",
//         "Profit",
//         "Tripple",
//         "Stella",
//         "The Matrix",
//         "Bourne"
//     ]
// ));
