

Since functions are objects in js we can find length

```js
function abc(x, y){
}

console.log(abc()); //undefined
console.log(typeof(abc)); //function
console.log(typeof(abc())); //undefined
console.log(abc.length); //2
```