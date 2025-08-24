import { useState } from "react";

function App(){

  const [display, setDisplay] = useState(true);

  return(
    <div>
      <h1>Toggle Hide / Show</h1>

      <button onClick={ ()=>setDisplay(!display) }>Toggle</button>
      {
        display ? <h1>Ayush</h1> : null
      } 

    </div>
  )
}

export default App;