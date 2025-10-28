# <center>JSX
JSX is syntax extension of Js, JavaScriptXML  
Let us write html in JavaScript and place them in the DOM ,  
JSX converts HTML tags into react elements.

```jsx
function Welcome()
{
  const user = "Ayush";
  return( 
    <>
      <h3> I am {user} </h3>
      <h3> Sum of 10+20={10+20} </h3>
      <button onClick = { ()=>alert("Clicked") }> CLick Me </button>
    </>
  )
}
export default Welcome
// Easily combined js variable in our html
```
React can work without JSX too,  
but complexity raises

## <center> RULES
In JSX Camel case is used for eg  `onClick`  
Use `className` Instead of `class`  
JavaScript Expressions in `{curly braces}`  


#### FUNCTIONS
In react we have to pass function definition in curly braces, No calling

```jsx
function App(){
  function callFun(){
    alert("Function Called");
  }
  return(
    <div>
      <button onClick={callFun()}> Click </button>
    </div>
  )
}
// This will endlessly call function , Instead we have to
<button onClick={function callFun(){alert("Function Called")}}> Click </button>

// But this is way too hectic, hence use same without ()
<button onClick={callFun}> Click </button>
```
Passing Parameters
```jsx
function App(){
  const fruit = (name) =>{
    alert(name)
  }

  return(
    <div>
      <button onClick = {()=>fruit("Apple")}>Apple</button>
    </div>
  )
}
```

## <center> CURLY BRACES

Hels us with variable, functions... and much more.
```jsx
function App() 
{
  const name = "Ayush"; //Variable

  function callFun(a,b){ //function
    return "Sum is "+(a+b)
  }

  const fruit = (name) =>{ //arrow to return
    alert(name)
  }

  const obj={ //object
    name: "Ayush",
    age: 21
  }

  // Using Everything created above
  return (
    <>
      <h3>{name}</h3>
      {callFun(60,9)}
      <button onClick = {()=>fruit("Apple")}> Click Here </button>
      {obj.name}
    </>
  )
}

export default App
```
