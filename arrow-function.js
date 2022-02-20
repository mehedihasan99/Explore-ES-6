/**
//  syntax
 let myFunction = (arg1, arg2, ...argN) => {
    statement(s)
    Here,
    1.myFunction is the name of the function
    2.arg1, arg2, ...argN are the function arguments
    3.statement(s) is the function body
}
 */

//  arrow function with two parameters
const add = (num1, num2) => num1 + num2;
const value = add(10, 20);
// console.log(value);

// arrow function with three parameters
const multi = (num1, num2, num3) => num1 * num2 * num3;
const value2 = multi(3, 4 , 5);
// console.log(value2);

// arrow function with one parameters

const makeDouble = num => num * 3;
const value3 = makeDouble(5);
// console.log(value3);

// arrow function without parameters
const homeCity = () => "syleht";
const value4 = homeCity();
// console.log(value4);

// arrow function with multiline statement....
const sum = (x, y) => {
    const sumValue = x + y;
    const multiValue = sumValue * 2;
    return multiValue;

}

const getSum = sum(20, 30);
console.log(getSum);