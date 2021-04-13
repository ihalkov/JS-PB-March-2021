function building(input = []) {
    let [floors, rooms] = [...input].map(Number);
    let output = [];
    for (let fl = floors; fl > 0; fl -= 1) {
        let line = '';
        let roomType = '';
        if (fl === floors) {
            roomType = 'L'
        } else if (fl % 2 === 0) {
            roomType = 'O';
        } else {
            roomType = 'A';
        }
        for (let room = 0; room < rooms; room += 1) {
            line += `${roomType}${fl}${room} `;
        }
        output.push(line);
    }
    return output.join('\n');
}

// console.log(building(["6", "4"]));
// console.log(building(["9", "5"]));
// console.log(building(["4", "4"]));