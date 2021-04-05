function walking(input = []) {
    let target = 10000;
    let totalSteps = 0;
    let ind = 0;
    while (ind < input.length) {
        let curr = input[ind];
        ind += 1
        if (curr === 'Going home') {
            continue;
        }
        totalSteps += Number(curr);
    }
    let diff = Math.abs(target - totalSteps);
    if (target > totalSteps) {
        return `${diff} more steps to reach goal.`;
    }
    return `Goal reached! Good job!\n${diff} steps over the goal!`;
}

// console.log(walking(