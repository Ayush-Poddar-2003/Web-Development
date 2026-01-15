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
a = 30;     //Reassigned ✅
{
  var a = 30;
}
console.log(a); //30 global scope✅
```

## let -
```JS
let a = 10;

// let a = 20; //Redeclare Error
a = 30;        //Reassigned ✅

{
  let a = 30;
}
//console.log(a); //local scope Error
```

## const -
```JS
const a = 10;

//const a = 20; //Redeclare Error
//a = 30;       //Reassign Error

{
  const a = 30;
}
//console.log(a); //local scope Error
```

----
## ADDITIONAL NOTES
- we can create variables with var let or const, eg `id=5` but not preferred
- If `let id`, no initalization => undefined