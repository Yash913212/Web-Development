import React, { useContext } from "react";
import Context from "./context";
import {Link} from "react-router-dom";

function Component1() {
  const {name} = useContext(Context);

  return (
    <div>
      <p>Name: {name}</p>
      <Link to='./component2'>Go to 2</Link>
    </div>
  );
}

export default Component1;
