import React, { useState, useContext } from "react";
import "../../css/GridResizeHandles.scss";
import { gridContext } from "../../context/gridContext";

export default function GridResizeHandles() {
  const [resizingLeft, setResizingLeft] = useState(false);
  const [resizingRight, setResizingRight] = useState(false);
  const { gridParameters, setGridParameters } = useContext(gridContext);
  const resizeLeft = e => {
    if (!resizingLeft) {
      return;
    }
    console.log("RESIZING LEFT");
  };
  const resizeRight = e => {
    if (!resizingRight) {
      return;
    }
    console.log("RESIZING RIGHT");
  };
  return (
    <>
      <div
        className={
          resizingLeft
            ? "grid-resize-handle grid-handle-left resizing"
            : "grid-resize-handle grid-handle-left"
        }
        onMouseDown={e => {
          e.persist();
          setGridParameters({
            ...gridParameters,
            canSelect: false
          });
          console.log("GRID RESIZER");
          setResizingLeft(true);
        }}
        onMouseMove={resizeLeft}
        onMouseUp={e => {
          setResizingLeft(false);
          setGridParameters({
            ...gridParameters,
            canSelect: true
          });
        }}
      />
      <div
        className={
          resizingRight
            ? "grid-resize-handle grid-handle-right resizing"
            : "grid-resize-handle grid-handle-right"
        }
        onMouseDown={e => {
          e.persist();
          setGridParameters({
            ...gridParameters,
            canSelect: false
          });
          setResizingRight(true);
        }}
        onMouseMove={resizeRight}
        onMouseUp={e => {
          setGridParameters({
            ...gridParameters,
            canSelect: true
          });
          setResizingRight(false);
        }}
      />
    </>
  );
}
