function sumNumbers(input = []) {
    let targetSum = Number(input[0]);
    let ind = 1;
    let currSum = Number(input[ind]);
    
    while (currSum < targetSum) {
        ind += 1;
        currSum += Number(input[ind]);
    }
    return currSum;
    }
    
    // console.log(sumNumbers(
    //     [
    //         "100",
    //         "10",
    //         "20",
    //         "30",
    //         "40"
    //     ]
    // ));
    // console.log(sumNumbers(
    //     [
    //         "20",
    //         "1",
    //         "2",
    //         "3",
    //         "4",
    //         "5",
    //         "6"]
    // ));
    