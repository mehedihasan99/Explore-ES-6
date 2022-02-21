// -------------
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
const getPython = aboutMe.hobbies?.Hrogramming?.language2;
console.log(getPython);