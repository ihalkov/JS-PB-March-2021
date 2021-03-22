function tradeCommissions(input = []) {
    let town = input[0];
    let sells = Number(input[1]);

    let belowEqual500 = {
        Sofia: 0.05,
        Varna: 0.045,
        Plovdiv: 0.055
    };
    let belowEqual1000 = {
        Sofia: 0.07,
        Varna: 0.075,
        Plovdiv: 0.08
    };
    let belowEqual10000 = {
        Sofia: 0.08,
        Varna: 0.1,
        Plovdiv: 0.12
    }
    let above10000 = {
        Sofia: 0.12,
        Varna: 0.13,
        Plovdiv: 0.145
    }
    let towns = ['Sofia', 'Varna', 'Plovdiv'];

    if (sells > 10000 && towns.includes(town)) {
        let commission = above10000[town] * sells;
        return commission.toFixed(2);
    } else if (sells > 1000 && towns.includes(town)) {
        let commission = belowEqual10000[town] * sells;
        return commission.toFixed(2);
    } else if (sells > 500 && towns.includes(town)) {
        let commission = belowEqual1000[town] * sells;
        return commission.toFixed(2);
    } else if (sells >= 0 && sells <= 500 && towns.includes(town)) {
        let commission = belowEqual500[town] * sells;
        return commission.toFixed(2);
    }
    return 'error';
}
// console.log(tradeCommissions(['Sofia', '1500']));
// console.log(tradeCommissions(['Plovdiv', '499.99']));
// console.log(tradeCommissions(['Varna', '3874.50']));
// console.log(tradeCommissions(['Kaspichan', '-50']));