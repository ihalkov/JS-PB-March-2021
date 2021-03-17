function pipesInPool(input = []) {
    let [volume, p1, p2, h] = [...input].map(Number);
    // occupancy
    let p1Tot = p1 * h;
    let p2Tot = p2 * h;
    let filled = p1Tot + p2Tot;

    if (filled > volume) {
        let over = filled - volume;
        return `For ${h.toFixed(2)} hours the pool overflows with ${over.toFixed(2)} liters.`;
    }
    let poolOccupancy = (filled / volume) * 100;
    let p1Occupancy = (p1Tot / filled) * 100;
    let p2Occupancy = (p2Tot / filled) * 100;
    return `The pool is ${poolOccupancy.toFixed(2)}% full. Pipe 1: ${p1Occupancy.toFixed(2)}%. Pipe 2: ${p2Occupancy.toFixed(2)}%.`;
}

// console.log(pipesInPool(
//     [
//         '1000', '100', '120', '3'
//     ]
// ));
// console.log(pipesInPool(
//     [
//         '100', '100', '100', '2.5'
//     ]
// ));