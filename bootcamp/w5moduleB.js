import { greet } from './w5moduleA.js';

function sayGreeting() {
    let name = "Angela";

    let greeting = greet(name);
    console.log(greeting);
}

sayGreeting();