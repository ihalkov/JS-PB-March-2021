function sequence2kPlus1(input = []) {
    let targetNum = Number(input[0]);
    let output = [];
    let currNum = 1;
    while (currNum <= targetNum) {
        output.push(currNum);
        currNum = (currNum * 2) + 1;
    }
    return output.join('\n');
    }
    // console.log(sequence2kPlus1(['3']));
    // console.log(sequence2kPlus1(['8']));
    // console.log(sequence2kPlus1(['17']));
    // console.log(sequence2kPlus1(['31']));
    