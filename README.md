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

====

Tea Break 