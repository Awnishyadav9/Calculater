import { useState } from 'react'
import './App.css'

function App() {
  const [value , setValue] = useState('')

  return (
    <>
      <div className='container'>
        <div className='box'>
          <input type="text" value={value}  readOnly/>
        </div>
        <div>
          <input type="button" value="Result" onClick={(e)=> setValue(eval(value))} /> 
          <input type="button" value="AC" onClick={(e)=>{setValue('')}}/>
          <input type="button" value="/" onClick={(e)=> setValue( value + e.target.value)}/>
        </div>
        <div>
          <input type="button" value="7" onClick={(e)=> setValue( value + e.target.value)} />
          <input type="button" value="8" onClick={(e)=> setValue( value + e.target.value)} />
          <input type="button" value="9" onClick={(e)=> setValue( value + e.target.value)}/>
          <input type="button" value="*" onClick={(e)=> setValue( value + e.target.value)} />
        </div>
        <div>
          <input type="button" value="4" onClick={(e)=> setValue( value + e.target.value)}/>
          <input type="button" value="5" onClick={(e)=> setValue( value + e.target.value)}/>
          <input type="button" value="6" onClick={(e)=> setValue( value + e.target.value)}/>
          <input type="button" value="-" onClick={(e)=> setValue( value + e.target.value)}/>
        </div>
        <div>
          <input type="button" value="1" onClick={(e)=> setValue( value + e.target.value)}/>
          <input type="button" value="2" onClick={(e)=> setValue( value + e.target.value)}/>
          <input type="button" value="3" onClick={(e)=> setValue( value + e.target.value)}/>
          <input type="button" value="+" onClick={(e)=> setValue( value + e.target.value)}/>
        </div>
        <div>
          <input type="button" value="%" onClick={(e)=> setValue( value + e.target.value)}/>
          <input type="button" value="0" onClick={(e)=> setValue( value + e.target.value)}/>
          <input type="button" value="." onClick={(e)=> setValue( value + e.target.value)}/>
          <input type="button" value="=" onClick={(e)=> setValue(eval(value))}/>
        </div>
      </div>
    </>
  )
}

export default App
