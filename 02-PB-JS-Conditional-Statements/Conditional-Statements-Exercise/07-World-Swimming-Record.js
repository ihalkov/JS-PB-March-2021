function worldSwimmingRecord(input = []) {
    let [record, length, timeForMeter] = [...input].map(Number);

    let delay = Math.floor(length / 15) * 12.5;
    let timeOfIvan = (length * timeForMeter) + delay;
    let timeDiff = Math.abs(record - timeOfIvan);

    let output = `Yes, he succeeded! The new world record is ${timeOfIvan.toFixed(2)} seconds.`;
    if (record <= timeOfIvan) {
        output = `No, he failed! He was ${timeDiff.toFixed(2)} seconds slower.`;
    }
    return output;
}
// console.log(worldSwimmingRecord(
//     [
//         "10464",
//         "1500",
//         "20"
//     ]
// ));
// console.log(worldSwimmingRecord(
//     [
//         "55555.67",
//         "3017",
//         "5.03"
//     ]
// ));