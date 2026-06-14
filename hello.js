"use strict";
const myUser = {
    name: "Nishant",
    id: 1
};
function greet(person) {
    return `Hello, ${person.name}! Your ID is ${person.id}.`;
}
console.log(greet(myUser));
