function passwordGuess(input = []) {
    let validPass = 's3cr3t!P@ssw0rd';
    let givenPass = input[0];
    return validPass === givenPass ? 'Welcome' : 'Wrong password!';
}
// console.log(passwordGuess(["qwerty"]));
// console.log(passwordGuess(["s3cr3t!P@ssw0rd"]));
// console.log(passwordGuess(["s3cr3t!p@ss"]));