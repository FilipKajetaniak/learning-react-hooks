import React from "react";

export default function GridContainer({ children }) {
  return (
    <>
      {/* <elementsContext.Provider value={{ elements, setElements }}> */}
      {children}
      {/* </elementsContext.Provider> */}
    </>
  );
}
