import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0)
    const [rCount, setrCount] = useState(10)

    return(
        <div>
            <h1>Counter : {count}  </h1>
            <button onClick={()=>setCount(count+1)}>Increase Counter</button>

            <h1>Reverse Counter : {rCount} </h1>
            <button onClick={()=>setrCount(rCount-1)}>Decrease Counter</button>
        </div>
    )
}

export default Counter;