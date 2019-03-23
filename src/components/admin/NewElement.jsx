import React, { useContext } from "react";
import "../../css/NewElement.scss";
import { elementsContext } from "../../context/elementsContext";

export default function NewElement({ data }) {
  const { elements, setElements } = useContext(elementsContext);
  const addElement = () => {
    setElements([
      ...elements,
      {
        left: `${data.left}%`,
        top: `${data.top}px`,
        width: `${data.width}%`,
        height: `${data.height}px`,
        id: new Date().getTime() + Math.floor(Math.random() * 9999999 + 1111111)
      }
    ]);
  };
  return (
    data && (
      <div
        className="new-element"
        onClick={addElement}
        style={
          data.top || data.left || data.width || data.height
            ? {
                left: `${data.left}%`,
                top: `${data.top}px`,
                width: `${data.width}%`,
                height: `${data.height}px`
              }
            : { display: "none" }
        }
      />
    )
  );
}
