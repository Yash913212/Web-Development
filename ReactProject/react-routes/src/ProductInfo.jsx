import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import image from "./assets/react.svg";

function ProductInfo() {
	const { ID } = useParams();
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

	const [mycard, setmycard] = useState(null);
	useEffect(() => {
		const found = Data.find(ele => ele.ID === parseInt(ID));
		setmycard(found || null);
	}, [ID]);

	if (mycard === null) {
		return <div>Product not found.</div>;
	}

	return (
		<div>
			<h2>{mycard.name}</h2>
			<p><strong>Brand:</strong> {mycard.Brand}</p>
			<p><strong>Price:</strong> ₹{mycard.Price}</p>
			<p><strong>Description:</strong> {mycard.Description}</p>
		</div>
	);
    
}

export default ProductInfo