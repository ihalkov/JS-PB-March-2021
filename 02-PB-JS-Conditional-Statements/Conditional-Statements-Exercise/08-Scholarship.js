function scholarship(input = []) {
    // Изискване за социална стипендия - 
    // доход на член от семейството по-малък от минималната работна заплата и успех над 4.5.
    // Размер на социалната стипендия - 35% от минималната работна заплата. 

    // Изискване за стипендия за отличен успех - успех над 5.5, включително.
    // Размер на стипендията за отличен успех - успехът на ученика, умножен по коефициент 25.

    let [income, grade, minSalary] = [...input].map(Number);
    let excellent = 0;
    let social = 0;
    if (grade >= 5.5) {
        excellent = Math.floor(grade * 25);
    }
    if (income < minSalary && grade >= 4.5) {
        social = Math.floor(minSalary * 0.35);
    }

    if (social === 0 && excellent === 0) {
        return 'You cannot get a scholarship!';
    } else if (social > excellent) {
        return `You get a Social scholarship ${social} BGN`;
    }
    return `You get a scholarship for excellent results ${excellent} BGN`;
}

// console.log(scholarship(
//     [
//         "480.00",
//         "4.60",
//         "450.00"
//     ]));
// console.log(scholarship(
//     [
//         "300.00",
//         "5.65",
//         "420.00"
//     ]
// ));