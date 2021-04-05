function accountBalance(input = []) {
    let totMoney = 0;
    let ind = 0;
    let currMoney = isNaN(input[ind]) ? input[ind] : Number(input[ind]);
    let output = [];
    
    while (currMoney !== 'NoMoreMoney') {
        ind += 1;
        if (currMoney < 0) {
            output.push('Invalid operation!');
            break;
        }
        output.push(`Increase: ${currMoney.toFixed(2)}`);
        totMoney += currMoney;
        currMoney = currMoney = isNaN(input[ind]) ? input[ind] : Number(input[ind]);
    }
    output.push(`Total: ${totMoney.toFixed(2)}`);
    return output.join('\n');
    }
    // console.log(accountBalance(
    //     [
    //         "5.51",
    //         "69.42",
    //         "100",
    //         "NoMoreMoney"
    //     ]
    // ));
    // console.log(accountBalance(
    //     [
    //         "120",
    //         "45.55",
    //         "-150"
    //     ]
    // ));
    