import User from "./User"

function App(){

  let userName = "Aditi";
  let age = 21;

  return(
    <div>
      <h1>Props Demo</h1>
      <User name={userName} age={age} />
    </div>
  )
}

export default App