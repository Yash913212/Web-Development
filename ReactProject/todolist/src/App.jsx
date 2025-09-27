import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h2>Todo list</h2><br></br>
        <input type="text" placeholder='Type your text'/>
        <button>*</button>
      </div>
    </>
  )
}

export default App
