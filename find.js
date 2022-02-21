/**
 Loop এর মতো প্রতিটি element এর মধ্যে দিয়ে যাবে , element কে একটা একটা ধরে নিয়ে আসবে। তারপর condition check করবে ,যতো গুলার  condition fulfil হবে, সব গুলার মধ্যে থেকে first যে element condition fulfil করবে সেই element কে return করবে , শুধু element কে return করবে। একটা array এর মধ্যে বক্স বন্ধী করবে নাহ ।
 */
const numbers = [ 10, 33, 44, 32 , 50, 90, 89];
const getBig = numbers.find(num => num > 30);
console.log(getBig);
const products = [
    {name:"button phone", price: 1200, color : "black"},
    {name:"android phone", price : 12000, color : "silver" },
    {name : "power bank", price : 500, color: "black"},
    {name : "water bottle", price : 100, color:"red"}
]

const blacks = products.find(product => product.color == "black");
console.log(blacks);