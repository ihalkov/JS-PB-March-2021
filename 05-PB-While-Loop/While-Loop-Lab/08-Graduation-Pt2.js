function graduationPt2(input = []) {
    let name = input[0];
    let ind = 1;
    let length = input.length;
    let sumGrades = 0;
    let countPoor = 0;
    while (ind <= length - 1) {
        let currGrade = Number(input[ind]);
        if (currGrade < 4.00) {
            countPoor += 1;
            if (countPoor > 1) {
                return `${name} has been excluded at ${ind - 1} grade`;
            }
        }
        sumGrades += currGrade;
        ind += 1;
    }
    let avg = sumGrades / 12;
    
    return `${name} graduated. Average grade: ${avg.toFixed(2)}`;
    }
    
    // console.log(graduationPt2(