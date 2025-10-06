
import add, {subtract} from "./lib";

import Person from "./Person"; // ESM not understood by NodeJS

let person = new Person("Roger", 52);

console.log(person.getName(), person.getAge());
console.log(add(51,5));
console.log(subtract(51,4));


let React = {
    createElement: (tag, props, ...children) => {
       var element = {tag, props: {...props, children}};
       return element;
    }
}

// JSX
let PersonCard = <div className="card">
    <h1 className="card-header">{person.getName()}</h1>
    <p>
        {person.getAge()}
    </p>
</div>

console.log(PersonCard);