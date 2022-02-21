// parent class
class Person { 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {
    constructor(name, age){
        super(name, age);
        this.occupation = "student";
    }
    greet() {
        console.log(`hello ${this.name}`);
        console.log(this.occupation);
    }

}
const student1 = new Student("mehedi", 30);
console.log(student1);
student1.greet();