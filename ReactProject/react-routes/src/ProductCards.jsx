import React from "react";
import { Link } from "react-router-dom";
import './productcard.css'
import image from "./assets/react.svg";

function ProductCard() {

    const Data = [
        {
            ID: 1,
            name: "Tshirt",
            Brand: "US POLO",
            Price: 2500,
            Description: "Hello This is POLO TSHIRT"
        },
        {
            ID: 2,
            name: "Jeans",
            Brand: "Levi's",
            Price: 5500,
            Description: "Hello This is Levis Jeans"
        }
    ];
    return (
        <div className="card">
            {Data.map((item) => (
                <Link to={`/product/${item.ID}`} key={item.ID}>
                    <div className="cards">
                        <img src={image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>Brand: {item.Brand}</p>
                        <p>Price: ₹{item.Price}</p>
                    </div>
                </Link>
            ))}
        </div>
    );




}
export default ProductCard