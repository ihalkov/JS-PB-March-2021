function sayHello() {
    return 'Hello SoftUni';
}

// console.log(sayHello());

function nums1to10() {
    let output = [];
    for (let i = 1; i <= 10; i++) {
        output.push(i);
    }
    return output.join('\n');
}
// console.log(nums1to10());

function squareArea(a = []) {
    let num = Number(a[0]);
    return num * num;
}
// console.log(squareArea(['5']));

function inchesToCentimeters(inches = []) {
    let centimeters = Number(inches[0]) * 2.54;
    return centimeters;
}
// console.log(inchesToCentimeters(['5']));

function greetingByName(input = []) {
    let name = input[0];
    return `Hello, ${name}!`;
}
// console.log(greetingByName(['Ivan']));

function concatenateData(input = []) {
    let [firstName, lastName, age, town] = [...input];
    return `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;
}
// console.log(concatenateData(['Maria', 'Ivanova', 20, 'Sofia']));

function projectsCreation(input = []) {
    // 1 project takes 3 hours
    let [architectName, numOfProjects] = [...input];
    let totalHours = Number(numOfProjects) * 3;
    return `The architect ${architectName} will need ${totalHours} hours to complete ${numOfProjects} project/s.`;
}
// console.log(projectsCreation(["George", "4"]));
// console.log(projectsCreation(["Sanya", "9"]));

function petShop(input = []) {
    input.map(Number);
    let [numDogs, rest] = [...input];
    let totalPrice = (numDogs * 2.5) + (rest * 4);
    return `${totalPrice} lv.`;
}
// console.log(petShop(["5", "4"]));
// console.log(petShop(["13", "9"]));

function yardGreening(input = []) {
    // Цената на един кв. м. е 7.61лв със ДДС
    // 18% discount from total price
    let area = Number(input[0]);
    let price = area * 7.61;
    let discount = price * 0.18;
    let finalPrice = price * 0.82;

    return `The final price is: ${finalPrice} lv.\nThe discount is: ${discount} lv.`;
}
// console.log(yardGreening(["550"]));
// console.log(yardGreening(["150"]));