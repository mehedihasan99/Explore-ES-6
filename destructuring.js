/**
 The destructuring assignment introduced in ES6 makes it easy to assign array values and object properties to distinct variables. For example,
 */
// before ES-6

const aboutMe = 
{
    name: "mehedi",
    class : "B.sc in cse",
    roll : 2850,
    age: 23,
    homeCity :{dict : "sylhet", thana: "g.ghat", village : "a.para"},
    hobbies : {play : "click", read : "books", programming : {
        language1 : "javascript", language2 : "python"}}

}
//  --------------------i need my age......
const myAge = aboutMe.age;
// -------------------console.log(myAge);
// -------------------i need village
const village = aboutMe.homeCity.village;
// -----------------console.log(village);

// -------------------after ES-6

const aboutMe2 = 
{
    name: "mehedi",
    class1 : "B.sc in cse",
    roll : 2850,
    age: 23,
    homeCity :{dict : "sylhet", thana: "g.ghat", village : "a.para"},
    hobbies : {play : "click", read : "books", programming : {
        language1 : "javascript", language2 : "python"}}

}
// -------------get my roll

// const {roll} = aboutMe2;
// console.log(roll);

//------------------------ get my thana
  
const { thana} = aboutMe2.homeCity;
// console.log(thana);
// ---------------get my favorite language
const { language1 } = aboutMe2.hobbies.programming;
// console.log(language1);

// get can get more than one variable at a time.......
const {name , class1, roll} = aboutMe2;
// console.log(name, class1, roll);

// ----------------- array destructuring----------
const arr1 = [10, 30, 44, 55];
const [a, b, c] = arr1;
// console.log(a, b);
// console.log(c);
