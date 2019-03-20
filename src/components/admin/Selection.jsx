import React from "react";
import "../../css/MouseSelection.scss";
import calculateMouseSelection from "../../utils/calculateMouseSelection";

export default function Selection({ startingPosition, endingPosition }) {
  return (
    <div
      className="selection"
      style={calculateMouseSelection(startingPosition, endingPosition)}
    />
  );
}
