import React from "react";

const FunctionComponent = () => {
    

    const respond = (data) =>{
        console.log(data)
    }
    const Fun = () =>{
        respond('Button clicked!')
    }

    return(
        <>
            <button onClick={Fun}>Click-me</button>
        </>
    )
}
export default FunctionComponent;