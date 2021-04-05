function password(input = []) {
    let name = input[0];
    let pass = input[1];
    
    let ind = 2;
    let currPass = input[ind];
    while (currPass !== pass) {
        ind += 1;
        currPass = input[ind];
    }
    return `Welcome ${name}!`;
    }
    
    // console.log(password(
    //     [
    //         "Nakov",
    //         "1234",
    //         "Pass",
    //         "1324",
    //         "1234"
    //     ]
    // ));
    // console.log(password(
    //     [
    //         "Gosho",
    //         "secret",
    //         "secret"
    //     ]
    // ));
    