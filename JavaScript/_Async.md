Check shreyians

SYNCHRONOUS  
Line by Line coding

ASYNCHRONOUS
Jo bhi code async nature ka ho, use side stack me bhej do, sync nature ke code ko chalao,  
jb sync finish ho jaaye, age async agr bcha h to main stack me laakr chla do

```js
async function call(){
    var blob = await fetch(`URL`)//optional
    // as we are asking for data from URL, server might be slow for data or even errors
    var ans = await blob.json(); //as non readab le
}
```