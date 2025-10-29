# <center>IMPORT EXPORT

We shouldn't make every component in a single file.  

---
#### <center>- Method 1 -
```jsx
// app.jsx
function Custom(){
    return(
        <div>
            <h1> Hi babe </h1>
        </div>
    )
}
export default Custom; 
```
We can export multiple components from single file  
`default` => Main component, one default at a time
```jsx
// Importing in any other file
import Custom form "./App.jsx"
```
---
#### <center>- Method 2 -
```JSX
//export direct

export function Custom2(){
    return(
        <div>
            <h1> Bye Babe </h1>
        </div>
    )
}
```
```jsx
import {Custom2} from  "./App.jsx" //Remember {}
```
---
#### <center> Exporting multiple components

Imagine Single file having 2 components -
```jsx
import Custom, {Custom2} from "./CustomComponent";
//Custom -> default exported
//Custom2 -> Normal exported
```
You can export variables, functions anythin...