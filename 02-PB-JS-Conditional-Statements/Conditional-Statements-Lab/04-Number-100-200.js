function number100to200(input = []) {
    let num = Number(input[0]);
    let result = 'Between 100 and 200';
    if (num < 100) {
        result = 'Less than 100';
    } else if (num > 200) {
        result = 'Greater than 200';
    }
    return result;
}

// console.log(number100to200(['95']));
// console.log(number100to200(['120']));
// console.log(number100to200(['210']));