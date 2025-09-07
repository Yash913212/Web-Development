import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './ClassComponent'
import FunctionComponent from './FunctionComponent'
import FirstName from './FirstName'
import LastName from './LastName'
import Age from './Age'
import Header from './Header'
import Gender from './Gender'

function App() {

  return (
  <>
    {/* <ClassComponent />
    <FunctionComponent />  */}
    <Header />
    <FirstName />
    <LastName />
    <Age />
    <Gender />
  </>
  )
}


export default App
