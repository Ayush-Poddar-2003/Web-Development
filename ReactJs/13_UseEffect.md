# <center>useEffect Hook

- Remove side effect from components (Below eg)**
- Also used to fetch data from API
- Used as life cycle methods, DOM Manipulation
---
SYNTAX -
```JSX
// useEffect(function as parameter, dependancy)

useEffect( ()=>{
    //code
}, [state or props] )
```
---
EXAMPLE -
```jsx
//App.jsx
import { useState } from "react";

function App()
{
  const [counter, setCounter] = useState(0);

  function callOnce(){
      console.log("Function Called");
  }
  callOnce();

  return(
    <button onClick = {()=>setCounter(counter+1)}> Counter {counter} </button>
  )
  // Everytime button is clicked => counter increases => callOnce function is run 
  // Bcoz state is change, hence rerenders
  // But if we want to execute it only once?
}

export default App;
```
Let say we have 2 buttons, we want everytime function run with only one button not with other
```jsx
import { useEffect, useState } from "react";

function App()
{

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
 
  function callOnce(){
    alert("callOnce Function Called")
  }

  useEffect(()=>{
    callOnce(); //calling inside useEffect
  }, [counter] )  
  //Bs counter update hone pr chalega

  return(
    <>
      <button onClick={()=>setCounter(counter+1)}> Counter {counter} </button>

      <button onClick={()=>setData(data+1)}> Data {data} </button>
    </>
  )
}
export default App;
```