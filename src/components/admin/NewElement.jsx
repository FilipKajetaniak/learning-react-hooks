import React, { useContext, useEffect } from "react";
import "../../css/NewElement.scss";
import { elementsContext } from '../../context/elementsContext';

export default function NewElement({ data }) {
  const { tescik } = useContext(elementsContext);
  useEffect(() => {
    console.log('stworzono nowy element')
    return () => {console.log('usunięto element')}
  })
  return (
    data && (
      <div
        className="new-element"
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
