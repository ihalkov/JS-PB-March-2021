function maxNumber(input = []) {
    let ind = 0;
    let curr = input[ind];
    let max = Number.MIN_SAFE_INTEGER;
    while (curr !== 'Stop') {
        let num = Number(curr);
        if (max < curr) {
            max = num;
        }
        ind += 1;
        curr = input[ind];
    }
    return max;
    }
    // console.log(maxNumber(
    //     [
    //         "100",
    //         "99",
    //         "80",
    //         "70",
    //         "Stop"
    //     ]
    // ));
    // console.log(maxNumber(
    //     [
    //         "-10",
    //         "20",
    //         "-30",
    //         "Stop"
    //     ]
    // ));
    // console.log(maxNumber(
    //     [
    //         "45",
    //         "-20",
    //         "7",
    //         "99",
    //         "Stop"
    //     ]
    // ));
    // console.log(maxNumber(
    //     [
    //         "999",
    //         "Stop"
    //     ]
    // ));
    // console.log(maxNumber(
    //     [
    //         "-1",
    //         "-2",
    //         "Stop"
    //     ]
    // ));
    