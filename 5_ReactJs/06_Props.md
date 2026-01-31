# <center>PROPS 
To transfer data from one component to other.

```jsx
//App.jsx

function App(){
  return(
      <User name="Ayush Poddar" age={22} /> //props send while attaching
  )
}
export default App
```

```jsx
// User.jsx

function User(param) { 
    return (
        <>
            <h1>{param.name}</h1> //both which were sent above
            <h1>{param.age}</h1>
        </>
    )
}

//OR
function User( {name, age} ) { //Directly, destructuring
    return (
        <>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </>
    )
}
```

## <center> SENDING MULTIPLE VALUES
```jsx
const App = () => {

  let userObject = {
    name:"Ayush Poddar",
    age: 22,
    email : "ayush@gmail.com"
  }

  return (
    <>
      <User employee={userObject}/>
    </>
  )
}
```
```js
const User = ({employee}) => {
  return (
    <div>
        <h1>{employee.name}</h1>
        <h1>{employee.age}</h1>
        <h1>{employee.email}</h1>
    </div>
  )
}
```
![alt text](image-24.png)

## <center> DEFAULT PROPS
```jsx
//DEFAULT PARAMETER
function User( {name="Ayush"} ){
    return (
            <h1>Hii {name}</h1>
    )
}
```