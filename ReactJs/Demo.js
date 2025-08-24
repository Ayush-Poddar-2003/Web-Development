// var arr = [1,2,3,4]
// var arr2 = arr;

// console.log(arr); //[ 1, 2, 3, 4 ]
// console.log(arr2); //[ 1, 2, 3, 4 ]

// arr2.pop();

// console.log(arr); //[ 1, 2, 3, 4 ]
// console.log(arr2); //[ 1, 2, 3, 4 ]

// var state = [1,2,3,4];
// var copy = [...state];

// copy.pop();

// console.log(state); //[ 1, 2, 3, 4 ]
// console.log(copy); //[ 1, 2, 3 ]


// var state = {name: "Ayush", age: 21}
// var copy = {...state}
// //we can do changes in copy
// copy.name = "Aditi"; 
// state = copy;

// console.log(state); //{ name:'Aditi', age:21 }


// var obj = {name: "Ayush", age: 21}
// // obj.name rather
// const {age} = obj; //as a alias of obj.age
// console.log(age); //21

// var obj = {
//     name: "String",
//     social: {
//         facebook: {
//             first: "Ayush",
//             second: "Aditi"
//         }
//     }
// }

// //obj.social.facebook.second RATHER
// const {second} = obj.social.facebook;
// console.log(second); //Aditi

var arr = [12, function(){}, 13]
const [f, ,s] = arr;
console.log(f,s);

