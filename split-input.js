let str = 'Sofia Varna Plovdiv';
    let str1 = '5% 4.5% 5.5%';

    let pattern = /[\s]+|[\t]+/g;
    let arr1 = str.split(pattern);
    let arr2 = str1.split(pattern);
for (let i = 0; i < arr1.length; i++) {
    console.log(`${arr1[i]}: ${arr2[i]}`);
}