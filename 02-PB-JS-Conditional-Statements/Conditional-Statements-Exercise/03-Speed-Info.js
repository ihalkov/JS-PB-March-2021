function speedInfo(input = []) {
    // При скорост до 10 (включително) отпечатайте "slow".
    // При скорост над 10 и до 50 отпечатайте "average".
    // При скорост над 50 и до 150 отпечатайте "fast".
    // При скорост над 150 и до 1000 отпечатайте "ultra fast".
    // При по-висока скорост отпечатайте "extremely fast". 
    let speed = Number(input[0]);
    let msg = 'extremely fast';

    if (speed <= 10) {
        msg = 'slow';
    } else if (speed <= 50) {
        msg = 'average';
    } else if (speed <= 150) {
        msg = 'fast';
    } else if (speed <= 1000) {
        msg = 'ultra fast'
    }
    return msg;
}

// console.log(speedInfo(['8']));
// console.log(speedInfo(['49.5']));
// console.log(speedInfo(['126']));
// console.log(speedInfo(['160']));
// console.log(speedInfo(['3500']));