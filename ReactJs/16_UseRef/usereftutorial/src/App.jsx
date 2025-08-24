import { useRef } from "react";

export default function App(){
  const inputRef = useRef(null);
  const inputHandler = () =>{
    inputRef.current.focus();
    inputRef.current.style.color='red';
  }
  
  return(
    <div>
      <h1>UseRef Demo</h1>
      <input ref={inputRef} type="text" placeholder="Enter your name : "/>
      <button onClick={inputHandler}>Focus changed to field on clicking</button>
    </div>
  )
}