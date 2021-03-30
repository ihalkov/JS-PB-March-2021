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