# <center>useSTATE

```jsx
function App() 
{
  let Fruit = "Apple";

  const changeFruit = () => {
    Fruit = "Banana";
  }

  return (
    <>
      <h3>{Fruit}</h3>
      <button onClick={changeFruit}>Click</button>
    </>
  )
}

export default App
```

This will change fruit in **backend**, you can check on console but  
won't be reflected on webpage, As reacts reflects changes only on re rendring   
React don't give a shit to variable, it needs **state**


# <center> STATE ?  
Container to store data just like variable but Mutable and dynamic.  
**Rerenders component automatically** unlike variable.   
If you want to update and reflect values in the UI, use state.  

---

```JSX
import { useState } from "react"; // Add this line

function App() 
{
  const [fruit, setFruit] = useState("Apple"); //default = Apple

  const changeFruit = () => {
    setFruit = "Banana"; //Any changes on 2nd
  }

  return (
    <>
      <button onClick={changeFruit}>Click</button>
    </>
  )
}

export default App
```

OTHER EXAMPLE

```JSX
import { useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(0)
  const [rCount, setrCount] = useState(10)

  return(
    <div>
      <h1>Counter : {count} </h1>
      <button onClick={()=> setCount(count+1)}> Increase </button>

      <h1>Reverse Counter : {rCount} </h1>
      <button onClick={()=> setrCount(rCount-1)}>Decrease </button>
    </div>
  )
}

export default Counter;
```