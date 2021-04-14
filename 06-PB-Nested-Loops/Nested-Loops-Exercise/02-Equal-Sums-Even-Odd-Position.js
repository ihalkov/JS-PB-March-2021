function equalSumsEvenOddPosition(input = []) {
    let [begin, end] = [...input].map(Number);
    let output = [];
    for (let currNum = begin; currNum <= end; currNum++) {
        if (hasEqualSums(currNum)) {
            output.push(currNum);
        }
    }
    return output.join(' ');

    function hasEqualSums(num = '') {
        num = num + '';
        let evenSum = 0;
        let oddSum = 0;
        for (let i = 0; i < num.length; i++) {
            if (i % 2 === 0) {
                evenSum += Number(num[i]);
                continue;
            }
            oddSum += Number(num[i]);
        }
        return ((evenSum === oddSum) ? true : false);
    }
}

// console.log(equalSumsEvenOddPosition(
//     [
//         "100000",
//         "100050"
//     ]
// ));
// console.log(equalSumsEvenOddPosition(
//     [
//         "123456",
//         "124000"
//     ]
// ));
// console.log(equalSumsEvenOddPosition(
//     [
//         "299900",
//         "300000"
//     ]
// ));
// console.log(equalSumsEvenOddPosition(
//     [
//         "100115",
//         "100120"
//     ]
// ));