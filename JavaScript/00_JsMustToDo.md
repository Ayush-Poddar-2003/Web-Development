<!-- SHREYIANS -->
# Js Essentials

```js
var arr = [1,2,3,4]
var arr2 = arr; //gets copied by reference

console.log(arr);  //[ 1, 2, 3, 4 ]
console.log(arr2); //[ 1, 2, 3, 4 ]

arr2.pop(); //If changes made to new

console.log(arr);  //[ 1, 2, 3 ] //old gets changed too
console.log(arr2); //[ 1, 2, 3 ]
```

### <center>SPREAD OPERATOR
```js
var state = [1,2,3,4];
state.pop(); //Not allowed in react
//Dont change previous value rather assign new value

var state = [1,2,3,4];
var copy = [...state]; //SPREAD OPERATOR used to copy

copy.pop(); //changes made

console.log(state); //[ 1, 2, 3, 4 ] //unaffected
console.log(copy); //[ 1, 2, 3 ]
```
Real life example on how to change value
```js
var state = {name: "Ayush", age: 21}
var copy = {...state}

copy.name = "Aditi"; 
state = copy;

console.log(state); //{ name:'Aditi', age:21 }
```

## <center> DESTRUCTURING

```js
var obj = {name: "Ayush", age: 21}

// Rather than using obj.age 'n' times
const {age} = obj; //as a alias of obj.age

console.log(age); //21
```

```js
var obj = {
    name: "String",
    social: {
        facebook: {
            first: "Ayush",
            second: "Aditi"
        }
    }
}
//obj.social.facebook.second RATHER
const {second} = obj.social.facebook;
console.log(second); //Aditi
```
Let's take array example
```js
var arr = [12, function(){}, 13]
const [f, ,s] = arr;
console.log(f,s); //12 13
```

## <center> IMPORT EXPORT
Alag Alag components ko export krkr main file me import


```js
export function ABC(){}

//OR
function ABC(){}
default export ABC()

//Where we are importing
import {ABC} from Src
```

## <center>ARROW FUNCTIONS
```js
const ABC = () => {
    //Code
}

//Parameter
const ABC = (a) => {
    console.log(a);
}
const ABC = a => {
    console.log(a);
}

//Implicit return
const ABCD = () => 12;
//This auto returns 12

//What if we need to return object
const ABCD = () => (
    {name: "Ayush"}
);
```

## <center>ARRAY FILTER
Both returns a new array

---

<!-- SHREYIANS -->
## WHAT IS ES6 ?
ES6 stands for ECMAScript 6, created to standardize JavaScript

## ES6 CLASSES
A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

```js
class Car {
    constructor(name) {
        this.brand = name;
    }
    // You can add your own methods in a class
    present() {
        return this.brand;
    }
}


//Constructor function is called automatically when the object is initialized.
const mycar = new Car("Ford");
document.write(mycar.present());
```

### INHERITENCE
To create a class inheritance, use the extends keyword.

```js
class Car {
  constructor(name) {
    this.brand = name;
  }
  present() {
    return this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name); //Parent constructor
    this.model = mod;
  }  
  show() {
    return this.present() + this.model
  }
}

const mycar = new Model("Ford", "Mustang");
document.write(mycar.show());
```

### FUNCTIONS
```JS
hello = function() {
  return "Hello World!";
}

hello = () => {
  return "Hello World!";
}

hello = () => "Hello World!";

//Parameters
hello = (val) => "Hello " + val;

// if you have only one parameter, you can skip the parentheses
hello = val => "Hello " + val;
```

### THIS


### VARIABLE
var, let, const     