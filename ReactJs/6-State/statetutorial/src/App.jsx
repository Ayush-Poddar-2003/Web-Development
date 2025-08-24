import { useState } from "react";
import Counter from "./Counter";

function App() {

  const [fruit, setFruit] = useState("Apple"); //var, function

  const changeFruit = () => {
    setFruit("Banana");
  }

  return (
    <>
      <h3>{fruit}</h3>
      <button onClick={changeFruit}>Click to change fruit</button>

      <Counter/>

    </>
  )
}

export default App;
