import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionComponent from './FunctionComponent'
import Function from './JS'
import RegistrationForm from './JS'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FunctionComponent /> */}
      <RegistrationForm />
    </>
  )
}

export default App
