import { useEffect, useState } from "react";

function App(){

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  useEffect(()=>{
    callOnce();
  }, [] )

  function callOnce(){
    alert("callOnce Function Called")
  }

  // callOnce();

  return(
    <div>
      <h1>Hello Mf</h1>
      <button onClick={()=>setCounter(counter+1)}> Counter {counter}</button>
      <button onClick={()=>setData(data+1)}> Data {data}</button>
    </div>
  )
}

export default App;