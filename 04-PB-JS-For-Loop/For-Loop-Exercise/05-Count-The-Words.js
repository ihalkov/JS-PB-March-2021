function countTheWords(input = []) {
    let sentence = input[0];
    let words = sentence.split(' ');
    let count = words.length;
    if (count > 10) {
        return `The message is too long to be send! Has ${count} words.`;
    }
    return `The message was sent successfully!`;
}

// console.log(countTheWords(["This message has exactly eleven words. One more as it's allowed!"]));
// console.log(countTheWords(["This message has ten words and you can send it!"]));