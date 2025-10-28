# <center> OBJECTS
An object is a collection of key-value pairs.  
The keys are called properties, and values can be any data type.

```js
var car = {
  brand: "Toyota",
  year: 2023
};

//Accessing
console.log(car.brand); //Toyota
console.log(car["year"]); //2023

//Changing values
car.brand = "Kia";

//Making values as constant
Object.freeze(car) //values won't change

//Adding properties
car.price = "1000";

//Deletion
delete car.brand;
console.log(car.brand); //undefined
```
---
**OBJECT CREATION**  
1. FACTORY FUNCTION
    ```JS
    function createRectangle(l, b)
    {
      return Rectangle = {
        length : l,
        breadth: b,

        draw(){
          console.log("Drawing Rectangle");
        }
      }
    }

    //creating object
    let rectObj1 = createRectangle(6,9);

    console.log(rectObj1); //displays complete obj
    ```

2. CONSTRUCTOR FUNCTION
    ```js
    function Rectangle(){
        this.length = 1,
        this.breath = 2,
        this.draw = function(){
          console.log("Printing Rectangle");
        }
    }

    let robj = new Rectangle();
    console.log(robj);
    ```