const num = [10, 34, 55, 67, 90];
const doubleIt = num.map(x => x * 2);
// console.log(doubleIt);
// 
const products = 
[
    {name:"button phone", price: 1200, color : "black"},
    {name:"android phone", price : 12000, color : "silver" },
    {name : "power bank", price : 500, color: "black"},
    {name : "water bottle", price : 100, color:"red"}
]
const ProductName = products.map(product => product.price);
console.log(ProductName);