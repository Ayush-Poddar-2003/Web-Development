import { useState } from "react";

function App(){

  const [val, setVal] = useState("Ayush Poddar")

  return (
    <div>
      <input type="text" placeholder="Enter User Name" 
      onChange={ (event)=>setVal(event.target.value)}
      value = {val}/>

      <h1>{val}</h1>

      <button onClick={()=>setVal("")}>Clear</button>

    </div>
  )
}

export default App;  