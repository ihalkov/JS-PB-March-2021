function minNumber(input = []) {
    let ind = 0;
    let curr = input[ind];
    let min = Number.MAX_SAFE_INTEGER;
    while (curr !== 'Stop') {
        let num = Number(curr);
        if (min > num) {
            min = num;
        }
        ind += 1;
        curr = input[ind];
    }
    return min;
    }
    
    // console.log(minNumber(
    //     [
    //         "100",
    //         "99",
    //         "80",
    //         "70",
    //         "Stop"
    //     ]
    // ));
    // console.log(minNumber(
    //     [
    //         "-10",
    //         "20",
    //         "-30",
    //         "Stop"
    //     ]
    // ));
    // console.log(minNumber(
    //     [
    //         "45",
    //         "-20",
    //         "7",
    //         "99",
    //         "Stop"
    //     ]
    // ));
    // console.log(minNumber(
    //     [
    //         "999",
    //         "Stop"
    //     ]
    // ));
    // console.log(minNumber(
    //     [
    //         "-1",
    //         "-2",
    //         "Stop"
    //     ]
    // ));
    