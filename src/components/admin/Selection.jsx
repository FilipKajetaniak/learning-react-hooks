import React, { useContext } from "react";
import "../../css/MouseSelection.scss";
import calculateMouseSelection from "../../utils/calculateMouseSelection";
import { gridContext } from "../../context/gridContext";

export default function Selection({ startingPosition, endingPosition }) {
  const { gridParameters } = useContext(gridContext);
  const style = calculateMouseSelection(
    startingPosition,
    endingPosition,
    gridParameters.width
  );
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
