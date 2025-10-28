# <CENTER> VARIABLES

| Keyword | Scope    | Reassignment | Redeclaration | Hoisting      | Introduced |
| ------- | -------- | ------------ | ------------- | ------------- | ---------- |
| `var`   | Global | ✅ Yes        | ✅ Yes         | ✅ (undefined) | ES5        |
| `let`   | Block    | ✅ Yes        | ❌ No          | ❌             | ES6        |
| `const` | Block    | ❌ No         | ❌ No          | ❌             | ES6        |


## var -
```JS
var a = 10;
var a = 20; //Redeclared ✅
a = 30; //Reassigned ✅

{
  var a = 30;
}
console.log(a); //30✅
```

## let -
```JS
let a = 10;
// let a = 20; //Error
a = 30; //Reassigned ✅

{
  let a = 30;
}
//console.log(a); //Error
```

## const -
```JS
const a = 10;
//const a = 20; //Error
//a = 30; //Error

{
  const a = 30;
}
//console.log(a); //Error
```