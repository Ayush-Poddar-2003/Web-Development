import { useContext } from "react"
import { Context } from "./Context"

export default function Subject(){
    
    const subject = useContext(Context);
    
    return(
        <div style={{backgroundColor:'pink', padding:10}}>
            <h1>Subject Came form Context : {subject}</h1>
        </div>
    )
}