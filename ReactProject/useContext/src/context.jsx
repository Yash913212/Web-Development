import React, { useState, createContext } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {

  return (
    <Context.Provider value={{name: "Thub", age: 20, city: "Indore"}}>
      {children}
    </Context.Provider>
  );
};

export default Context;
