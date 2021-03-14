function concatenateData(input = []) {
    let [firstName, lastName, age, town] = [...input];
    return `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;
}
// console.log(concatenateData(['Maria', 'Ivanova', 20, 'Sofia']));