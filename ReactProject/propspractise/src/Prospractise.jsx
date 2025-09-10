import React from "react";

const Prospractise = (Props) => {
    const { image, title } = Props.MyData;
    return (
        <>
            <div className="card">
                <img src={image} />
                <h3>{title}</h3>
            </div>
        </>
    )
}

export default Prospractise;