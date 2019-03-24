import React, { useState } from "react";
import "../../css/NewElement.scss";

export default function NewElement({ data }) {
  const [resizedSides, setResisedSides] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  const startResizing = side => {
    setResisedSides({
      ...resizedSides,
      [side]: true
    });
  };
  const resizingRight = e => {
    console.log("resizing");
  };
  const stopResizing = side => {
    setResisedSides({
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
          className="right-side-handle"
        />
      </div>
    )
  );
}
