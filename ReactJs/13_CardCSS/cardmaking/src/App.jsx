import { useState } from 'react'
import './App.css'

function App() {

  const [cardStyle, setCard] = useState(
    {
        border:'1px solid #a5a09cff',
        width: '200px',
        boxShadow: '1px 2px 3px 0px #ccc ccc57',
        margin: '10px'
    }
  )

  const [textColor, setText] = useState('Black');

  const updateTheme = (bgColor, textColor) =>{
    setCard({...cardStyle, backgroundColor:bgColor})
    setText(textColor); 
  }

  return (
    <>
      <h1 style={{color:'red',}}>Inline Styling</h1>

      <button onClick={()=>updateTheme('darkblue', 'white')}>Gray Theme</button>
      <button onClick={()=>updateTheme('white', 'black')}>Default Theme</button>

      <div style={{display: 'flex', flexWrap: 'wrap'}}>

        <div style={cardStyle}>
        <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{padding: '5px', color: textColor}}>
            <h4>Ayush Poddar</h4>
            <p>Software Developer</p>
          </div>
        </div>
        
      </div>
      
    </>
  )
}

export default App
