const arr1 = [10, 40, 33, 55, 22];
console.log(arr1);
const getMax = Math.max(...arr1);
// console.log(getMax);
const arr2 = [...arr1, 90, 100];
const getSmall = Math.min(...arr2);
console.log(getSmall);