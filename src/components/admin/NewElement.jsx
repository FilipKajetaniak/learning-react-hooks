import React, { useState, useContext } from "react";
import { newElementContext } from "../../context/newElementContext";
import { gridContext } from "../../context/gridContext";
import calculateSide from "../../utils/calculateSide";
import "../../css/NewElement.scss";

export default function NewElement({ data }) {
  const [resizedSides, setResizedSides] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  const { newElement, setNewElementData } = useContext(newElementContext);
  const { gridParameters, setGridParameters } = useContext(gridContext);
  const startResizing = side => {
    setGridParameters({
      ...gridParameters,
      canSelect: false
    });
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
  const stopResizing = side => {
    setResizedSides({
      ...resizedSides,
      [side]: false
    });
    setGridParameters({
      ...gridParameters,
      canSelect: true
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
          className={
            resizedSides.right
              ? "right-side-handle resized"
              : "right-side-handle"
          }
        />
      </div>
    )
  );
}
