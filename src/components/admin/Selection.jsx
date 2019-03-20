import React from "react";
import "../../css/MouseSelection.scss";
import calculateMouseSelection from "../../utils/calculateMouseSelection";

export default function Selection({ startingPosition, endingPosition }) {
  const style = calculateMouseSelection(startingPosition, endingPosition);
  return (
    <div
      className="selection"
      style={{
        left: `${style.left}%`,
        top: `${style.top}px`,
        width: `${style.width}%`,
        height: `${style.height}px`
      }}
    />
  );
}
