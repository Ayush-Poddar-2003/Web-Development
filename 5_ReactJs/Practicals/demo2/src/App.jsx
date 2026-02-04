function App(){

  function callMe(a){
    alert(a)
  }

  return(
    <>
      <h1>Hi Ayush</h1>
      <button onClick={()=>callMe("Hello")}>Click Me DADDY</button>
    </>
  )
}

export default App