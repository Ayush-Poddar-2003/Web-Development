# <center>JSX
JSX is syntax extension of Js, JavaScriptXML  
Let us write html in JavaScript and place them in the DOM ,  
JSX converts HTML tags into react elements.

---
**RULES**  
In JSX Camel case is used for eg  `onClick`  
Use `className` Instead of `class`  
JavaScript Expressions in `{curly braces}`  

---
#### FUNCTIONS
In react we have to pass function definition in curly braces, No calling

```jsx
function App()
{

  function callFun(){
    alert("Function Called");
  }

  return(
    <div>
      <button onClick={callFun()}> Click </button> //Infinite call
    </div>
  )
}

// Instead we have to
<button onClick={function callFun(){
  alert("Function Called")
}}> Click </button>

// We can use same without ()
<button onClick={callFun}> Click </button>
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
