function summerOutfit(input = []) {
    let deg = Number(input[0]);
    let partOfTheDay = input[1];

    if (deg >= 25) {
        let curr = {
            Morning: {
                Outfit: 'T-Shirt',
                Shoes: 'Sandals'
            },
            Afternoon: {
                Outfit: 'Swim Suit',
                Shoes: 'Barefoot'
            },
            Evening: {
                Outfit: 'Shirt',
                Shoes: 'Moccasins'
            }
        }
        return `It's ${deg} degrees, get your ${curr[partOfTheDay].Outfit} and ${curr[partOfTheDay].Shoes}.`;
    } else if (deg > 18) {
        let curr = {
            Morning: {
                Outfit: 'Shirt',
                Shoes: 'Moccasins'
            },
            Afternoon: {
                Outfit: 'T-Shirt',
                Shoes: 'Sandals'
            },
            Evening: {
                Outfit: 'Shirt',
                Shoes: 'Moccasins'
            }
        }
        return `It's ${deg} degrees, get your ${curr[partOfTheDay].Outfit} and ${curr[partOfTheDay].Shoes}.`;
    } else if (deg >= 10) {
        let curr = {
            Morning: {
                Outfit: 'Sweatshirt',
                Shoes: 'Sneakers'
            },
            Afternoon: {
                Outfit: 'Shirt',
                Shoes: 'Moccasins'
            },
            Evening: {
                Outfit: 'Shirt',
                Shoes: 'Moccasins'
            }
        }
        return `It's ${deg} degrees, get your ${curr[partOfTheDay].Outfit} and ${curr[partOfTheDay].Shoes}.`;
    }
}
// console.log(summerOutfit(
//     [
//         "16",
//         "Morning"
//     ]
// ));
// console.log(summerOutfit(
//     [
//         "22",
//         "Afternoon"
//     ]
// ));