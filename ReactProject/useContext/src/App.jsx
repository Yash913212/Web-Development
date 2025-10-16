import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ContextProvider } from "./context";
import Component1 from "./component1";
import Component2 from "./component2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Component1 />} />
          <Route path="/Component2" element={<Component2 />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;