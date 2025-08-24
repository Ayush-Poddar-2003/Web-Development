// console.log(typeof(23));
// console.log(typeof(23.25));
// console.log(typeof(NaN));

// console.log(5 / 0); // Infinity
// console.log(typeof(Infinity));

// console.log(-5 / 0); // -Infinity
// console.log(typeof(-Infinity));

// console.log(Boolean("AnyString"));
// console.log(Boolean(69));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(Infinity));

// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// let bigNum = 123456789012345678901234567890n;
// console.log(bigNum);  // 123456789012345678901234567890n
// console.log(typeof(bigNum));

// let x = null;
// console.log(x); //null
// console.log(typeof(x)); //object

// const car = {
//   brand: "Toyota",
//   year: 2023
// };

// console.log(car.brand); //Toyota
// console.log(car["year"]); //2023
// car.price="1000";
// // delete car.brand;
// console.log(car); //undefined

// function createRectangle()
// {
//   return Rectangle = {
//     length : 1,
//     breadth: 2,

//     draw(){
//       console.log("Drawing Rectangle");
//     }
//   }
// }

// let rectObj1 = createRectangle();

// console.log(rectObj1);

// function Rectangle(){
//     this.length = 1,
//     this.breath = 2,
//     this.draw = function(){
//       console.log("Printing Rectangle");
//     }
// }

// let robj = new Rectangle();
// console.log(robj);


// var arr = [1,2,3,4]

// arr.forEach(function(val){
//   console.log(val + " hello");
// })

// //1 hello
// // 2 hello
// // 3 hello
// // 4 hello

// var arr = [1,2,3,4]

// var ans = arr.map(function(val){
//   return val+10;
// })
// console.log(ans);

// var arr = [1,2,3,4]

// var ans = arr.filter(function(val){
//   if(val>=3) {return true;} //Returning true let us put the value back
//   else return false; //by default
// })

// console.log(ans);


// var arr = [1,2,3,4]

// var ans = arr.find(function(val){
//   if(val==2) return val;
// })

// console.log(ans);

// console.log(arr.indexOf(3));

function abc(x, y){
}

console.log(abc()); //undefined
console.log(typeof(abc)); //function
console.log(typeof(abc())); //undefined
console.log(abc.length); //2


