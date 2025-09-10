import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prospractise from './Prospractise'

function App() {
  const MyCards = [
    {
      image : reactLogo,
      title : "React"
    },
    {
      image : viteLogo,
      title : "Vite"
    },
    {
      image : reactLogo,
      title : "React2"
    }
  ]

  return (
    <>
      <div className="parent">
        {
          MyCards.map((ele, index) => (
            <Prospractise key={index} MyData={ele} />
          ))
        }
      </div>
    </>
  )
}

export default App
