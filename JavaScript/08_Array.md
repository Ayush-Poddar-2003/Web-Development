# ARRAY
Can put any type of value
```JS
var arr = [1, 'a', "ayush", {}, true, function(){}, []]
```

## <center> FOR EACH
```JS
var arr = [1,2,3,4]

arr.forEach(function(val){
  console.log(val + " hello");
})

// 1 hello
// 2 hello
// 3 hello
// 4 hello
```

## <center> MAP
Creates an empty array of same size
```js
var ans = arr.map(function(val){
  return val+10;
})
console.log(ans); //[ 11, 12, 13, 14 ]
```

## <center> FILTER
```js
var ans = arr.filter(function(val){
  if(val>=3) {
    return true; 
    //Returning true let us put the value back
  }
  else 
    return false; //by default
})
console.log(ans);
```

## <center> FIND
```js
var ans = arr.find(function(val){
  if(val==2) return val;
})

console.log(ans); //2
```
