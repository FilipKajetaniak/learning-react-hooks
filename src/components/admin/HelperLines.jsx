import React from "react";
import "../../css/HelperLines.scss";

export default function HelperLines() {
  const verticalLines = [];
  const numberOfVerticalLines = 26;
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
  const numberOfHorizontalLines = 35;
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
      {horizontalLines}
      {verticalLines}
    </>
  );
}
