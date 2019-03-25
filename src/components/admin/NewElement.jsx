import React, { useState, useContext } from "react";
import { newElementContext } from "../../context/newElementContext";
import calculateSide from "../../utils/calculateSide";
import "../../css/NewElement.scss";

export default function NewElement({ data }) {
  const [resizedSides, setResizedSides] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  const { setNewElementData } = useContext(newElementContext);
  const startResizing = side => {
    setResizedSides({
      ...resizedSides,
      [side]: true
    });
  };
  const resizingRight = e => {
    e.persist();
    if (!resizedSides.right) {
      return;
    }
    setNewElementData({
      ...data,
      width: calculateSide("right", e, data)
    });
  };
  const resizingBottom = e => {
    e.persist();
    if (!resizedSides.bottom) {
      return;
    }
    setNewElementData({
      ...data,
      height: calculateSide("bottom", e, data)
    });
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
        {String(resizedSides.bottom)}
        <div
          onMouseDown={() => startResizing("right")}
          onMouseMove={resizingRight}
          onMouseUp={() => stopResizing("right")}
          className={
            resizedSides.right
              ? "right-side-handle resized"
              : "right-side-handle"
          }
        />
        <div
          onMouseDown={() => startResizing("bottom")}
          onMouseMove={resizingBottom}
          onMouseUp={() => stopResizing("bottom")}
          className={
            resizedSides.bottom
              ? "bottom-side-handle resized"
              : "bottom-side-handle"
          }
        />
      </div>
    )
  );
}
