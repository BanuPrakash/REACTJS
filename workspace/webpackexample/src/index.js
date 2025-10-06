import add, {subtract} from "./lib";

import Person from "./Person"; // ESM not understood by NodeJS

let person = new Person("Roger", 52);

console.log(person.getName(), person.getAge());
console.log(add(51,5));
console.log(subtract(51,4));

