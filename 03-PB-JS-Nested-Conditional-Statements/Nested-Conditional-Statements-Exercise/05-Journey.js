function journey(input = []) {
    let budget = Number(input[0]);
    let season = input[1];
    let place = season === 'summer' ? 'Camp' : 'Hotel';

    let moneySpend = 0;
    let percent = 0;
    let destination = '';
    if (budget <= 100) {
        let obj = {
            summer: 0.3,
            winter: 0.7
        };
        destination = 'Bulgaria';
        percent = obj[season];
    } else if (budget <= 1000) {
        let obj = {
            summer: 0.4,
            winter: 0.8
        };
        percent = obj[season];
        destination = 'Balkans';
    } else if (budget > 1000) {
        place = 'Hotel';
        percent = 0.9;
        destination = 'Europe';
    }
    moneySpend = budget * percent;
    return `Somewhere in ${destination}\n${place} - ${moneySpend.toFixed(2)}`;
}

// console.log(journey(["50", "summer"]));
// console.log(journey(["75", "winter"]));
// console.log(journey(["312", "summer"]));
// console.log(journey(["678.53", "winter"]));
// console.log(journey(["1500", "summer"]));