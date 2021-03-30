function numbersFrom1To100() {
    let output = [];
    for (let i = 1; i <= 100; i++) {
        output.push(i);
    }
    return output.join('\n');
}

// console.log(numbersFrom1To100());

function numbersNto1(n = '') {
    let num = Number(n);
    let output = [];
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
    return output.join('\n');
}

// console.log(numbersNto1(['2']));
// console.log(numbersNto1(['3']));
// console.log(numbersNto1(['5']));

function numbers1ToNStep3(n = '') {
    let num = Number(n);
    let output = [];
    for (let i = 1; i <= num; i += 3) {
        output.push(i);
    }
    return output.join('\n');
}

// console.log(numbers1ToNStep3(['10']));
// console.log(numbers1ToNStep3(['7']));
// console.log(numbers1ToNStep3(['15']));

function evenPowersOf2(n = '') {
    let num = Number(n);
    let output = [];
    // power
    for (let pow = 0; pow <= num; pow++) {
        if (pow % 2 === 0) {
            output.push(2 ** pow);
        }
    }
    return output.join('\n');
}

// console.log(evenPowersOf2(['2']));
// console.log(evenPowersOf2(['4']));
// console.log(evenPowersOf2(['5']));
// console.log(evenPowersOf2(['6']));
// console.log(evenPowersOf2(['7']));

function characterSequence(input = []) {
    let str = input[0];
    let output = [];
    for (let i = 0; i < str.length; i++) {
        output.push(str[i]);
    }
    return output.join('\n');
}

// console.log(characterSequence(["softuni"]));
// console.log(characterSequence(["ice cream"]));

function vowelsSum(input = []) {
    let str = input[0];
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (isVowel(ch)) {
            sum += getVowelValue(ch);
        }
    }
    return sum;

    function isVowel(ch = '') {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        if (vowels.includes(ch)) {
            return true;
        }
        return false;
    }
    function getVowelValue(vowel = '') {
        let vowelsValue = {
            a: 1,
            e: 2,
            i: 3,
            o: 4,
            u: 5
        }
        return vowelsValue[vowel];
    }
}

// console.log(vowelsSum(["hello"]));
// console.log(vowelsSum(["hi"]));
// console.log(vowelsSum(["bamboo"]));
// console.log(vowelsSum(["beer"]));

function sumOfNumbers(input = []) {
    let strNum = input[0];
    let sum = 0;
    for (let i = 0; i < strNum.length; i++) {
        sum += Number(strNum[i]);
    }
    return `The sum of the digits is:${sum}`;
}

// console.log(sumOfNumbers(['1234']));
// console.log(sumOfNumbers(['564891']));

function numbersDivisibleBy9(input = []) {
    let [num1, num2] = [...input].map(Number);
    let sum = 0;
    let result = [];
    for (let i = num1; i <= num2; i++) {
        if (i % 9 === 0) {
            result.push(i);
            sum += i;
        }
    }
    return `The sum: ${sum}\n${result.join('\n')}`;
}

// console.log(numbersDivisibleBy9(['100', '200']));