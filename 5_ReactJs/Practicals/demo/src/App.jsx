import { useState } from "react"

function App(){

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');

  return(
    <>
      <h5>Controlled Component</h5>

      <form action="">
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
        {name}
        <br />
        <input type="text" value={password} onChange={(event)=>setPassword(event.target.value)}/>
        {password}
        <br />
        <input type="text" value={mail} onChange={(event)=>setMail(event.target.value)}/>
        {mail}
        <br />
        <button onClick={()=>{setName('');setMail('');setPassword('')}}>Clear</button>
        
      </form>
    </>
  )
}

export default App