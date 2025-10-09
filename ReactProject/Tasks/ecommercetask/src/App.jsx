import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddItem from "./Pages/AddItem.jsx";
import ShowItem from "./Pages/ShowItem.jsx";
import Context from "./Context.jsx";
import ItemDetails from "./Pages/ItemDetails.jsx";

function App() {
    const[submitItem , setSubmitItem] = useState([])
  return (
    <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<AddItem />}/>
                <Route path='/showitem' element={<ShowItem />}/>
                <Route path='/itemdetails/:id' element={<ItemDetails />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
