function animalType(input = []) {
    let classAnimal = 'unknown';
    let type = input[0];
    switch (type) {
        case 'dog':
            classAnimal = 'mammal';
            break;
        case 'crocodile':
        case 'tortoise':
        case 'snake':
            classAnimal = 'reptile';
            break;
    }
    return classAnimal;
}
// console.log(animalType(['dog']));
// console.log(animalType(['snake']));
// console.log(animalType(['cat']));