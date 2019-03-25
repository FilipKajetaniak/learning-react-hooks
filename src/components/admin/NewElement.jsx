import React, { useState, useContext } from "react";
import { newElementContext } from '../../context/newElementContext';
import "../../css/NewElement.scss";

export default function NewElement({ data }) {
  const [resizedSides, setResizedSides] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  const { newElement, setNewElementData } = useContext(newElementContext);
  const startResizing = side => {
    setResizedSides({
      ...resizedSides,
      [side]: true
    });
  };
  const resizingRight = e => {
    if (!resizedSides.right) {return}
    // setNewElementData({
    //   ...newElement,
    //   right: ????
    // })
  };
  const stopResizing = side => {
    setResizedSides({
      ...resizedSides,
      [side]: false
    });
  };
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
      >
        {String(resizedSides.right)}
        <div
          onMouseDown={() => startResizing("right")}
          onMouseMove={resizingRight}
          onMouseUp={() => stopResizing("right")}
          className={resizedSides.right ? "right-side-handle resized" : "right-side-handle"}
        />
      </div>
    )
  );
}
