function readText(input = []) {
    let ind = 0;
    let currWord = input[ind];
    let output = [];
    while (currWord !== 'Stop') {
        output.push(currWord);
        ind += 1;
        currWord = input[ind];
    }
    return output.join('\n');
}

    // console.log(readText(
    //     [
    //         "Nakov",
    //         "SoftUni",
    //         "Sofia",
    //         "Bulgaria",
    //         "SomeText",
    //         "Stop",
    //         "AfterStop",
    //         "Europe",
    //         "HelloWorld"
    //     ]
    // ));
    // console.log(readText(
    //     [
    //         "Sofia",
    //         "Berlin",
    //         "Moscow",
    //         "Athens",
    //         "Madrid",
    //         "London",
    //         "Paris",
    //         "Stop",
    //         "AfterStop"
    //     ]
    // ));