import React from 'react';
import './Navbar.css'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/'>
                <button 
                className='additem'>Add Item
                </button>
            </Link>
            <Link to='/showitem' >
                <button className='showitem'>Show Item</button>
            </Link>
        </div>
    );
}

export default Navbar;