"use strict";

class Dog {
    constructor() {
        this.name = "dog";
    }
}

let dog = new Dog();

console.log("dog", dog);
console.log("dog.__proto__", dog.__proto__);
console.log("dog.prototype", dog.prototype);