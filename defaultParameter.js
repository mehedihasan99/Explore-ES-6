function add(x = 10, y = 5){
    return x + y; 
}
/* default parameter আমাদের undefined এর থেকে বাচায়। যখন আমরা default parameter use করবো নাহ, তখন user যদি ভুলে কোন একটা parameter না দেয় , তখন সেটা undefined return করবে। যদি আমরা default parameter use করি তাইলে আমরা error টা খাবো নাহ */
const sum = add(3, 7);
console.log(sum);
const sum2 = add(20);
console.log(sum2);