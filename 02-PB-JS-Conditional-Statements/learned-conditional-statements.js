// Debugging
    // F9 - Breakpoints
    // Shift + F11 - we can go directly to the breakpoints

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    // else if (num % 10 === 5) num which last digit is five

    // using objects instead of switch statements
    function getLevaPerLiter(fuelType, card) {
        let prices = {
            gasoline: 2.22,
            diesel: 2.33,
            gas: 0.93
        };

        let discount = {
            gasoline: 0.18,
            diesel: 0.12,
            gas: 0.08
        };

        let levaPerLiter = prices[fuelType];
        if (card === 'Yes') {
            levaPerLiter -= discount[fuelType];
        }
        return levaPerLiter;
    }