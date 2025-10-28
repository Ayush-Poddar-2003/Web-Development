# <center> COMPONENTS ?
  
A JavaScript function that returns JSX   
Same like function, but name starts with **Capital** letter

```jsx
function Welcome(){ 
  return(
    <div>
      <h1>Hey Buddy</h1>
    </div>
  );
}
export default Welcome;
// We always need a wrapper inside return.
```
You can then render this inside your main.jsx:
```jsx
//Any name but location should be correct
import App from './App.jsx'  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />   
  </StrictMode>,
)
```
### FUNCTION Vs COMPONENT
Component can return html code too


---
## <center> TYPES
### 1. Functional Component (Modern & preferred)
```JSX
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```


---
### 2. Class Component (Older)
A class component must include the **extends** `React.Component`  
Also requires a `render()` method, that returns HTML.
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```


## <center>Multiple Components
```jsx
function App(){
  return(
    <div>
      <h1>Hey Buddy</h1>
      <Fruit></Fruit> 
      <Color></Color>
    </div>
  )
}

function Fruit(){
  return (
    <h1>Apple</h1>
  )
}

function Color(){
  return (
    <h1>Red</h1>
  )
}

export default App;
```