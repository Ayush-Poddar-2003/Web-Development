# <center>IMPORT EXPORT

We shouldn't make every component in a single file.  
We can, but not feasible and professional.

---
#### Method 1 -
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

//main.jsx
import Custom form "./App.jsx"
```
#### Method 2 -
```JSX
//Method 2 direct
export function Custom2(){
    return(
        <div>
            <h1> Bye Babe </h1>
        </div>
    )
}

//main.jsx
import {Custom2} from  "./App.jsx"
```
Use default export for primary component, one default at a time


Imagine file having both above 2 components -
```jsx
//App.jsx
import Custom, {Custom2} from "./CustomComponent";
//Custom -> default exported
//Custom2 -> Normal exported
```
You can export variables, functions anythin...