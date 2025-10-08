# REACT
```
Banu Prakash C
Full Stack Architect,
Co-founder Lucida Technologies Pvt Ltd.,
Corporate Trainer,
Emails: banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/
https://github.com/BanuPrakash/REACTJS

Softwares Required:
Visual Studio Code.
Chrome Web Browser
NodeJS Latest LTS

node --version
```

Part 1:
Introduction to NodeJS, JS Build tool and TypeScript

Part 2:
React JS

Part 3:
State Management

=============================

NodeJS:
Platform with V8 JavaScript engine and libuv libraries.

JS need JS engine for execution.
V8 -> google --> Chrome / NodeJS
Rhino -> Netscape 
SpiderMonkey --> FireFox
JavaScriptVM --> Opera
Chakra --> IE
Continnum -> Edge / V8
Nashorn -> Oracle

libuv:libuv is a multi-platform C/C++ library that provides support for asynchronous I/O based on event loops. Examples like while using setTimeout, setInterval, Promise, Network calls, IO operations, ...

libuv does the same thing as WebApi in Browser

Why do i need NodeJs? Can't I execute my JS directly on Browser?
1) We can write code in Latest version of JS, TypeScript, CoffeeScript, LiveScript, Dart ...
TypeScript --> Statically typed

we need to traspile/compile them into understandable code by engine

Transpile: we write code in latest JS version [ ES 2025], but browser is supporting older version like [JS 5]
We have transpilers like Babel / Traceur
Babel is a free and open-source JavaScript transcompiler, also known as a transpiler. Its primary function is to convert modern JavaScript code (ECMAScript 2015+ and beyond) into a backward-compatible version of JavaScript that can run in older browsers or environments that may not fully support the latest language features. 

2) We need to test - Unit testing / Integration Testing / E2E Testing

3) Bundle
Without bundling:

Ordering is important,
Each script tag leads to a network call.
One call to index.html + n calls to each of script tag and link [css]
```
    <script src="product.js"></script>
    <script src="customer.js"></script>
    <script src="order.js"></script>
    <script src="payment.js"></script>
```

Solution is bundle them and include int template:
```
  <script src="bundle.js"></script>
```

4) Minify and Uglify the code.
Why: Each character is a byte
Before Minify:
```
function addProduct(product) {
    let data = [];
    data.push(product);
    return product;
}
```

After minify:
```
function addProduct(product){let data = [];data.push(product);return product;}
```

After Uglify:
```
function _a(_p){let _d = [];_d.push(_p);return _p;}
```

4) NodeJS for building APIs [ RESTful WS], real time applications [ chatbot], Tradictional web application.. [ Not over concern for this session]

===========

Package Managers:
1) npm -> comes by default along with NodeJS installation
using this we can install dependencies [3rd party libraries like react, angular, jquery, ...]
publish your module to repository [npm repo not github]
execute scripts
2) yarn -> alternate to npm - faster than npm
npm install yarn -g
3) PNPM - good for MonoRepo
4) RUSH - good for MonoRepo and MicroFrontEnd

New Node Project:
npm init --y

creates package.json

npm i lodash
this library is installed in "node_modules" folder

"lodash": "4.17.21" --> exact version
"lodash": "^4.17.21" -> this or latest version from repo
"lodash": "~4.17.21" -> Major version has to be 4, minor and patch can be latest

Team member:
npm install
 this looks at package.json and downloads all the dependencies configured

By default nodeJS understands CommonJS module system.
Module Systems:
1) CommonJS
2) ESM -> ES Module system
3) SystemJS
4) AMD
5) UMD

=============================

JavaScript build tools:
1) Grunt
2) Gulp
3) Parcel
4) Webpack -- was default until React 18 version
5) Vite [veet] --> react 19 deprecated usage of webpack for vite.

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as  bundle, minification, compilation, unit testing, and linting. It uses a command-line interface to run custom tasks defined in a file

=====

vite is a next-generation tool, with built-in support for TypeScript, JSX, CSS and static assets

With Webpack explicitly we need to configure:
1) Babel for transpiler
2) tsc -> TypeScript compiler for typescript
3) CSS-loader, style-loader for handling CSS
4) file-loader for static assets
5) Html-webpack-plugin to handle bundles
6) webpack-dev-server

=============

npm init --y
npm i babel-loader @babel/core @babel/preset-env html-webpack-plugin webpack-dev-server

babel-loader: understands ESM module system, CommonJS is default
import {add} from './lib' 
instead of
const {add} = require('./lib'); // CommonJS

loaded library is given to @babel/core --> actual transpiler
@babel/preset-env: 
@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).

Syntax transforms:

```
 const add = (x,y) => x + y;
 let colors =  ["RGB(255,0,0)", "RGB(0,255,0)"];
 let [red,green] = colors
```
into
```
 function add(x,y) {
    return x + y;
 }
 let colors =  ["RGB(255,0,0)", "RGB(0,255,0)"];
 var red = colors[0];
 var green = colors[1];
```

A polyfill is a piece of code, typically JavaScript, that provides modern web platform features to older browsers or environments that do not natively support them. 
https://caniuse.com/

```
    Promise.resolve(() => {"id": 1, "name": "iPhone"});
```
Polyfills from:
https://www.npmjs.com/package/core-js

npm start

npm run dev

========

Web application Development:
1) JS and DOM
document.createElement("div")
document.querySelector("div")

2) jQuery library simplified DOM
$("<div/>")
$("div");

3) Templates: Handlebar, Mustache, Underscore, jQuery Template, ..

Template:
```
Data:
{
  people: [
    "Yehuda Katz",
    "Alan Johnson",
    "Charles Jolley",
  ],
}
Template:
<ul class="people_list">
  {{#each people}}
    <li>{{this}}</li>
  {{/each}}
</ul>

Output:
<ul class="people_list">
    <li>Yehuda Katz</li>
    <li>Alan Johnson</li>
    <li>Charles Jolley</li>
</ul>
```

4) SPA - Single Page Application
we have a single HTML page but many views
MVC Architecture --> Model View Controller

4.1) Backbone library supported Model and Controller support, View - any above mentioned templates
4.2) AngularJS - Google - MVC Framework
4.3) ReactJS -- View Library, we need 3rd party libraries for predicatable state managment
https://www.youtube.com/watch?v=8pDqJVdNa44
4.4) Angular - Google - MVC Framework
4.5) Vue
4.5) Svelete

==================

React Components can be created using
1) React.createElement()
2) Class Component
3) Functional Component (99% of usage)

Evolution of React: XHP [XML in PHP], FaxJS, ReactJs

React uses JSX [JavaScript and XML]

Renderers
https://github.com/chentsulin/awesome-react-renderer

Functional Components returns JSX --> React.createElement() --> JS Object
Class Component has render() -> returns JSX --> React.createElement() -> JS Object.

JS Object is given to various renderers to convert into View

=====================

Thinking in React:
Atoms: These are the fundamental, indivisible building blocks of an interface, like HTML tags, buttons, labels, input fields, or icons.
Molecules: These are groups of atoms bonded together to form a functional, reusable unit.
Card, Navbar
Organisms: These are relatively complex UI components composed of molecules and/or atoms, forming a distinct section of an interface. 
Toolbar
Templates: These are page-level structures that arrange organisms and molecules into a layout, focusing on the content structure without actual content. 

99% of time we use readymade atoms and molecules 
Mui / react-bootstrap / KendoUI / PrimeReact / Adobe React Spectrum.

=======

Customer application using vite:
1) npm create vite@latest
2) npm run dev

Preffered Folder structures
```
 src
    features
      customers
        CustomerList
        CustomerRow
        Filter
      products
        ProductList
        ProductCard
        ...
      orders
    common
        atoms
            Button.jsx
        molecules
            Card.jsx
```

props --> passed from parent to child [ simple XML terminology - attribute]

Reconciliation in React is the process by which React efficiently updates the user interface (UI) to reflect changes in the application's state or props.

Diffing Algorithm
compares VDOM with VDOM copy

```
    diffs.forEach(element => {
        if(element.new) {
            elem = document.createElement(element.tag);
            root.append(elem)
        } else  {
            // append Code
        }
    })

```

"binding Context":
```
var product = {
    "name": "iPhone",
    "price": 89000.00,
    "update": function(p) {
        this.price = p;
    }
}

product.update(999999); // works

let ref = product.update; // get function reference, here context is lost. inside update doesn;t understand "this"

ref(); // fails
```

React Class Components as of React 16.8 version:
1) can have state
2) can have life-cycle methods

Mounting Phase:
```
constructor() -> render() -> componentDidMount()
initialize --> render the screen with initial data --> Make API calls and update state

Example:
youtube
constructor --> initialize say 20 videos with empty strings and "rect" placeholder image
render blank rectangles
componentDidMount() pulls videos from server and update the screen

What happens if we make API calls in constructor?
until server responds we have blank screen -- FCP issue
```

Updating Phase: State changes
``` 
    shouldComponentUpdate() -> true -> render() -> componentDidUpdate()
    shouldComponentUpdate() -> false -> render is not called
    
    componentDidUpdate() is the place where dependent API call has to be made.
```

https://jsonplaceholder.typicode.com/users

componentWillUnMount() -> rarely used --> used to unsubscribe any subscriptions, Pop-up dialog 

npm install @faker-js/faker

=======


Unit testing React components.

1) React Testing Library [RTL]
https://testing-library.com/docs/react-testing-library/intro/

npm install  @testing-library/react @testing-library/dom -D

- render() renders React component in-memory 
- queries to fetch elements, use this instead of document
like document.querySelector(), document.getElementById() // avoid

2) RTL can be used with jasmine/mocha/ jest/vitest testing frameworks

vite gets along with vitest

npm i vitest -D
npm i jsdom -D

Testing --> Assemble Action Assert [AAA]

Code Coverage can be done using ISTANBUL of V8
npm i @vitest/coverage-v8 -D

==============

Day 1 Recap:
* Why we need NodeJS? V8 and libuv
* Build tools help automate tasks like compilation, linting, testing, bundle,..
* webpack, babel-loader, @babel/core, @babel/preset-env, @babel/preset-react[ JSX ]
* Building react application using vite [veet]
npm create vite@latest -> verbose --> main.jsx is an entry point
npx create-react-app myapp [ uses webpack] --> index.js as entry point

* React.createElement() for converting JSX to JS object
* Functional component --> returns JSX
* class component: React 16.8 we needed this because class component can have state, life-cycle methods
render() returns JSX

returned JS object from createElement() has to be passed to renderers - react-dom, react-native, react-tv,.. to convert into UI
- state, setState() async operation
- reconcilliation
- componentDidMount()
- shouldComponentUpdate() here decide if re-rendering is required
- componentDidUpdate() any state changes render and call this - dependent API calls
- componentWillUnmount() release any acquired resources, un-subscribe, popup

RTL : react testing library - testing react components.

=================================

Functional components: prefered way to create components from 16.8 version onwards.
React 16.8 version released hooks which can acheive what class component provides in functional components.
Important hooks:
* useState()
* useEffect()
* useReducer()
* useContext()
* useRef()
* useCallback()


```
<UserCard user={user} setUid={setUid} key={user.id}/>
<div> 
{
 user   
}
</div>

@babel/preset-react invokes UserCard() --> JSX -> React.createElement() -> JS
 
let React = {
    createElement: (tag, props, ...children) => {
        if(typeof tag === 'function') {
            return tag(props);
        }
        var element = {tag, props: {...props, children}};
        return element;
    }
 }

```

* useReducer()
is a hook to be used instead of useState() if
a) state mutation depends on previous state
b) state is complex
c) conditionally mutate the state

```
    State:
    {
            "cartItems": [
                {"id": 1, "product": "iphone", "qty": 2, "price": 2221},
                {"id": 2, "product": "LG AC", "qty": 1, "price": 6512}
            ],
            total: 52324,
            quantity : 2
    }
Add to Cart:
{"product":"Sony TV", "qty" : 1}

we need to add the payload to cartItems, recomute total and quantity

Remove from cart:
2

increment iPhone qty


```

Counter will have a count,
Different actions like INCREMENT, DECREMENT, RESET

* Action object is one which has type of action and optinonal payload

```
    {
        type:'ADD_TO_CART',
        payload: {"product": "iPhone", qty: 4}
    }

    {
        type: 'CLEAR_CART'
    }

    {
        type:'INCREMENT',
        payload: 1
    }

```

* reducer functions:
The reducer function receives the current state of your application and an "action" object - conditionally mutate and return new state.

(state, action) => new state

====================================

React Context: React 16.4
Placeholder for storing data to avoid props drill.


====

Shopping application:
1) react hooks
2) Context for State management for smaller applications
3) react-router-dom
4) axios for API call instead of fetch
5) bootstrap - CSS Framework for RWD
6) react-bootstrap / mui /adobe spectrum
7) @fortawesome/react-fontaswesome
8) @fortawesome/free-solid-svg-icons
9) typescript

Same application we will convert to use REDUX tommorrow

===========

1) NavbarComponent 
2) ProductList
3) ProductCard
4) Details
5) CartComp
6) CartRow
7) ProductForm
8) Default

react-router-dom module helps to display different component for different URLs
http://localhost:3000/products
http://localhost:3000/cart
http://localhost:3000/details/3
http://localhost:3000/form
http://localhost:3000/sdfsdf 

react-router-dom also helps in lazy loading of components
axios for API call instead of fetch

==============


npm create vite@latest
1) shopapp
2) react
3) typescript

cd shopapp
shopapp % npm i axios bootstrap react-bootstrap react-router-dom @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

href is for server side routing
Link is for client side routing

Problem: in bigger application if we create a single bundle ==> bundle.js
until this bundle.js is not loaded into browser we have blank screen - FCP issue

instead bundle.js should have only common things required intially to display.
other component can be lazily loaded as and when required.

=============

Using React Context, reducers, useReducer for handling Cart.

Memoization Pattern:
cache the result for an expensive function call

```
    let [user, setUser] = useState();
    const ProfileContext = createContext(); 

    useEffect(() => {
        axios.post("http://myserver.com", {username:"Sam", Password: "secret"})
        .then(response => setUser(response.data))
    });

    return <ProfileContext.Provider value={{displayName: user.name, avatar: user.image, role: user.authorities}}>
        
    </ProfileContext.Provider>

```

Checkout ==> place order to server, clear cart contents and redirect to landing page

json-server -> Fake RESTful WS

npx json-server --watch data.json --port 1234

Any state changes in functional component, entire function is reloaded in engine.

=======================

ProductForm --> different ways to handle form data
Redux, RTK

https://gist.github.com/cmota/f7919cd962a061126effb2d7118bec72

places questions in data.json

http://localhost:1234/questions

==================

Form Handling in React

1) Controlled Components
```
State Management: The form data in a controlled component is entirely managed by the React component's state. The component's state is the single source of truth for the input's value.
Characteristics:
Easier to validate and manipulate input in real-time.
Provides more control over the form elements and their behavior.
Requires more boilerplate code to manage state and event handlers.

```
2) UnControlled Components
```
State Management: The form data in an uncontrolled component is managed by the DOM itself, similar to traditional HTML forms. React does not directly control the input's value.

Characteristics:
Simpler to implement for basic forms, requiring less boilerplate code.
Less control over real-time validation and manipulation of input.
Relies on the DOM to manage the input's state, which can be less predictable.

```

Predictable State Management:
Most of the developers used MVC Architecture to seperate concerns like Angular ,Backbone,..
Model View Controller -> Microsoft Excel
Model -> business data and logic
View -> Presentation
Controller -> Application Logic / event handling

======

React - Unidirectional data flow
State Managment also to be unidirectional data flow - Flux Architecture

```
class UserStore extends EventEmitter {
    constructor() {
        super();
        this._users = []; // Private state
    }

    getUsers() {
        return this._users;
    }

    // Method called by the Dispatcher after an action
    addUsers(newUsers) {
        this._users = [...this._users, ...newUsers];
        this.emit('change'); // Emit change event
    }
}

```

Based on Flux Architecture:
1) Redux
2) MobX
3) Recoil
...

Redux is the most preferred Predicatable State managment.
Why Redux?
1) Time Travel Debugging
2) integrates well with 3rd party libraries for async operations
3) Can be developed as seperate module and integrated with other frontend and backend tech like React, Angular, jQuery, ExpressJS , NextJS
4) Good for GlobalStore in MicroFront applicaitons
5) Seperation of Concerns

```
React Context API:
    Purpose: Primarily designed to address "prop drilling," the issue of passing props down through many layers of nested components. It allows data to be shared across the component tree without explicitly passing props at each level.
    Simplicity: Simpler to implement and requires less boilerplate code compared to Redux.
    Use Cases: Ideal for sharing less frequently updated data or managing localized state that doesn't require complex logic, such as theme settings, user authentication status, or language preferences.
    Performance: Updates to context can trigger re-renders of all consuming components within its tree, even if they don't directly use the updated value, potentially impacting performance in highly dynamic scenarios.

Redux:
    Purpose: A standalone library for predictable state management, offering a centralized store for the entire application's state. It follows a strict, unidirectional data flow (actions, reducers, store).
    Complexity: Involves more concepts (actions, reducers, store, middleware) and boilerplate code, leading to a steeper learning curve.
    Use Cases: Best suited for large, complex applications with frequent state changes, intricate data flows, and a need for powerful debugging tools (like Redux DevTools for time-travel debugging).
    Performance: Optimized for performance, as it only re-renders components that are specifically subscribed to the updated parts of the Redux state.
    Ecosystem: Benefits from a rich ecosystem of middleware and extensions for handling side effects, persistence, and more.

```


npm create vite@latest
reduxexample, react, javascript

reduxexample % npm i redux react-redux


===============

Redux toolkit

Convert "shopapp" statemanagement from Context to RTK.

npm create vite@latest
shopapp-rtk
react
typescript

shopapp-rtk % npm i @reduxjs/toolkit react-redux
shopapp-rtk % npm i axios bootstrap react-bootstrap react-router-dom @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
