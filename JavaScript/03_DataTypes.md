# <center> DATATYPES

> **Primitive** - boolean, bigint, string, symbol, number, null, undefined  
**Non-Primitive** (Reference) - object, array, function
---



## <center>1. BOOLEAN -
```JS
let isAdult = true;
console.log(typeof isAdult); // "boolean"
```
```js
// True Values
console.log(Boolean("AnyString"));
console.log(Boolean(69));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(Infinity));
```
```js
// False Values
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
```

## <center>2. NUMBER
Js has only one type of number, no int, no float or any extra-
```js
//Every exmaple is number
console.log(typeof(23));
console.log(typeof(23.25));
console.log(typeof(NaN));

console.log(5 / 0); // Infinity
console.log(typeof(Infinity));

console.log(-5 / 0); // -Infinity
console.log(typeof(-Infinity));
```

## <center>3. BigInt
```js
let bigNum = 123456789012345678901234567890n;
console.log(bigNum);  // 123456789012345678901234567890n
console.log(typeof(bigNum)); //bigint
```


## <center>4. UNDEFINED

```JS
let x;
console.log(x); //undefined
console.log(typeof(x)); //undefined
```

## <center>5. NULL
```js
let x = null;
console.log(x); //null
console.log(typeof(x)); //object
```

## <center>6. SYMBOL

## <center>7. STRING**

# <CENTER> NON PRIMITIVE
1. Array
2. Function
3. Object

