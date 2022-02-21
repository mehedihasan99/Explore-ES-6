/**
 A class is a blueprint for the object. You can create an object from the class.

You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house. House is the object.

Since many houses can be made from the same description, we can create many objects from a class.
 */
class Support{
    name;
    work = "he is a job holder";
    address = "jafflong";
    constructor (name){
        this.name = name;
    }
    getMoney(){
        const x = 10;
        const y = 30;
        const sum = x + y;
        const multi = sum * 10;
        console.log(multi)
    }
}

const sakib = new Support("sakib");
const tamim = new Support("tamim");
sakib.getMoney();
tamim.getMoney();
// console.log(sakib);
// console.log(tamim);
class person{
    constructor(name, age, address, profession){
        this.name = name;
        this.gae = age;
        this.address = address;
        this.profession = profession;
    }
    greet(){
        console.log(`hello ${this.name}`);
    }
}
const person1 = new person("Mehedi hasan", 23, "dhaka", "student");
console.log(person1);
person1.greet();