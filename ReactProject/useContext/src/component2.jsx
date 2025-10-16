import React, { useContext } from "react";
import Context from "./context";

function Component2() {
    const {age} = useContext(Context);

    return (
        <div>
        <h2>Age : {age}</h2>
        </div>
    );
}
export default Component2;