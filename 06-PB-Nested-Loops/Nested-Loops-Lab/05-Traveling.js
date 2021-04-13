function traveling(input = []) {
    let destination = input[0];
    let minBudget = Number(input[1]);
    let budget = 0;
    let output = [];
    for (let i = 2; i < input.length; i++) {
        let curr = input[i];
        if (!isNaN(curr)) {
            budget += Number(curr);
            if (budget >= minBudget) {
                output.push(`Going to ${destination}!`);
            }
            continue;
        }
        destination = input[i];
        minBudget = Number(input[++i]);
        budget = 0;
    }
    return output.join('\n');
}
// console.log(traveling(["Greece",
// "1000",
// "200",
// "200",
// "300",
// "100",
// "150",
// "240",
// "Spain",
// "1200",
// "300",
// "500",
// "193",
// "423",
// "End"])
// );
// console.log(traveling(["France",
// "2000",
// "300",
// "300",
// "200",
// "400",
// "190",
// "258",
// "360",
// "Portugal",
// "1450",
// "400",
// "400",
// "200",
// "300",
// "300",
// "Egypt",
// "1900",
// "1000",
// "280",
// "300",
// "500",
// "End"])
// );