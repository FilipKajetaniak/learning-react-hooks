import React, { useState, useEffect } from "react";
import { elementsContext } from "../context/elementsContext";

export default function GridContainer({ children }) {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    console.log(elements);
  });
  return (
    <>
      <elementsContext.Provider value={{ elements, setElements }}>
        {children}
      </elementsContext.Provider>
    </>
  );
}
