function combinations(input = []) {
    let num = Number(input[0]);
    let combinations = 0;
    for (let x1 = 0; x1 <= num; x1++) {
        for (let x2 = 0; x2 <= num; x2++) {
            for (let x3 = 0; x3 <= num; x3++) {
                let curr = x1 + x2 + x3;
                if (curr === num) {
                    combinations += 1;
                }
            }
        }
    }
    return combinations;
}
// console.log(combinations(['25']));
// console.log(combinations(['20']));
// console.log(combinations(['5']));