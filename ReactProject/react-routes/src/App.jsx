import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
// import Contact from './contact'
// import Home from './Home'
// import Service from './service'
// import Error from './404'
import ProductInfo from './ProductInfo'
import ProductCard from './ProductCards'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/product/:ID" element={<ProductInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
