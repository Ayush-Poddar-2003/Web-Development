# <center>JSX
JSX is syntax extension of Js, JavaScriptXML  
Let us write html in js,  
As earlier we had seprate html and seprate js file.

```jsx
function Welcome()
{
  const user = "Ayush";
  return( 
    <>
      <h3>I am {user}</h3>
      <h3>Sum of 10+20={10+20}</h3>
      <button onClick = {()=>alert("Clicked")} > CLick Me </button>
    </>
  )
}
export default Welcome
```
React can work without JSX too,  
but complexity raises

## <center> RULES
In JSX Camel case is used for eg  `onClick`  
Use `className` Instead of `class`  
JavaScript Expressions in `{curly braces}`  

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
