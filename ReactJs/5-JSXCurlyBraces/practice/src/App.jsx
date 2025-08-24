function App() {
  const name = "Ayush";
  function callFun(a,b){
    return "Sum is "+(a+b)
  }
  const obj={
    name: "Ayush",
    age: 21
  }

  return (
    <>
      <h3>Variable used : {name}</h3>

      Function used : {callFun(60,9)}
      <br/>
      <br/>
      Object used : {obj.name} {obj.age}
    </>
  )
}

export default App
