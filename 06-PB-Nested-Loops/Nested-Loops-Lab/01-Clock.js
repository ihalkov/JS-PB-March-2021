function clock() {
    let output = [];
    for (let h = 0; h <= 23; h++) {
        for (let m = 0; m <= 59; m++) {
            output.push(`${h}:${m}`);
        }

    }
    return output.join('\n');
}

// console.log(clock());