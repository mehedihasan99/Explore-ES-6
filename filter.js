/**
 Loop এর মতো প্রতিটি element এর মধ্যে দিয়ে যাবে , element কে একটা একটা ধরে নিয়ে আসবে। তারপর condition check করবে ,যতো গুলার  condition fulfil হবে, সব গুলার full element কে return করবে একটা array এর মধ্যে বক্স বন্ধী করে।
 */
const age = [12, 13, 22, 23, 34, 33, 5, 55, 4, 3];
const findAdult = age.filter(adult => adult >= 18);
console.log(findAdult);
const products = [
    {name:"button phone", price: 1200, color : "black"},
    {name:"android phone", price : 12000, color : "silver" },
    {name : "power bank", price : 500, color: "black"},
    {name : "water bottle", price : 100, color:"red"}
]
const expensive = products.filter(product => product.price > 1000);
console.log(expensive);
const blacks = products.filter(product => product.color == "black")
console.log(blacks)