# IMPORT EXPORT

We shouldn't make every component in a single file.  
We can, but not feasible and professional, imagine 1000s of lines of code.

---
#### EXPORTING -
```jsx
//CustomComponent.jsx in src folder

//Method 1 to export
function Custom(){
    return(
        <div>
            <h1> Hi babe </h1>
        </div>
    )
}
export default Custom; 
```
```JSX
//Method 2 direct
export function Custom2(){
    return(
        <div>
            <h1> Bye Babe </h1>
        </div>
    )
}
```

---
#### IMPORTING -
```jsx
//App.jsx
import Custom, {Custom2} from "./CustomComponent";

function App() {
  return(
    <div>
      <Custom/>
      <Custom2/>
    </div>
  )
}

export default App;
```

```jsx
// main.jsx
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
