function projectsCreation(input = []) {
    // 1 project takes 3 hours
    let [architectName, numOfProjects] = [...input];
    let totalHours = Number(numOfProjects) * 3;
    return `The architect ${architectName} will need ${totalHours} hours to complete ${numOfProjects} project/s.`;
}
// console.log(projectsCreation(["George", "4"]));
// console.log(projectsCreation(["Sanya", "9"]));