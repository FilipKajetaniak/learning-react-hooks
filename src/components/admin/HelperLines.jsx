import React, { useMemo } from "react";
import "../../css/HelperLines.scss";

export default function HelperLines({
  numberOfHorizontalLines,
  numberOfVerticalLines
}) {
  const drawLines = (lines, direction) => {
    const linesArray = [];
    if (direction === "vertical") {
      for (let i = 0; i < lines; i++) {
        linesArray.push(
          <div
            className={lines / (i + 1) === 2 ? "vertical center" : "vertical"}
            key={i}
            style={{
              width: `${100 / lines}%`,
              left: `${i * (100 / lines)}%`
            }}
          />
        );
      }
    } else {
      for (let i = 0; i < lines; i++) {
        linesArray.push(
          <div
            className="horizontal"
            key={i}
            style={{
              height: `${100 / lines}%`,
              top: `${i * (100 / lines)}%`
            }}
          />
        );
      }
    }
    return linesArray;
  };
  const verticalLines = useMemo(
    () => drawLines(numberOfVerticalLines, "vertical"),
    [numberOfVerticalLines]
  );
  const horizontalLines = useMemo(
    () => drawLines(numberOfHorizontalLines, "horizontal"),
    [numberOfHorizontalLines]
  );

  return (
    <>
      {horizontalLines}
      {verticalLines}
    </>
  );
}
