let str = 'Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday';
    let str1 = '12	12	14	14	12	16	16';

    let pattern = /[\s]+|[\t]+/g;
    let arr1 = str.split(pattern);
    let arr2 = str1.split(pattern);
for (let i = 0; i < arr1.length; i++) {
    console.log(`${arr1[i]}: ${arr2[i]}`);
}