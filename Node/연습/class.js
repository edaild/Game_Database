// ES6 클래스


class Person{

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`hello, my name is ${this.name}`);
    }
}

var person = new Person("Bob" ,20);

person.greet();
