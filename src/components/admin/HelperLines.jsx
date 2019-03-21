import React, { useContext } from "react";
import "../../css/HelperLines.scss";
import { gridContext } from "../../context/gridContext";

export default function HelperLines() {
  const { gridParameters } = useContext(gridContext);
  const verticalLines = [];
  const numberOfVerticalLines = gridParameters.verticalLines;
  for (let i = 0; i < numberOfVerticalLines; i++) {
    verticalLines.push(
      <div
        className={
          numberOfVerticalLines / (i + 1) === 2 ? "vertical center" : "vertical"
        }
        key={i}
        style={{
          width: `${100 / numberOfVerticalLines}%`,
          left: `${i * (100 / numberOfVerticalLines)}%`
        }}
      />
    );
  }

  const horizontalLines = [];
  const numberOfHorizontalLines = gridParameters.horizontalLines;
  for (let i = 0; i < numberOfHorizontalLines; i++) {
    horizontalLines.push(
      <div
        className="horizontal"
        key={i}
        style={{
          height: `${100 / numberOfHorizontalLines}%`,
          top: `${i * (100 / numberOfHorizontalLines)}%`
        }}
      />
    );
  }

  return (
    <>
        {gridParameters.visible && horizontalLines}
        {gridParameters.visible && verticalLines}
    </>
  );
}
