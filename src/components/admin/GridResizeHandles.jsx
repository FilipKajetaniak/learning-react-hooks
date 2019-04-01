import React, { useState, useContext } from "react";
import "../../css/GridResizeHandles.scss";
import { gridContext } from "../../context/gridContext";
import { newElementContext } from "../../context/newElementContext";

export default function GridResizeHandles() {
  const [resizing, setResizing] = useState({ left: false, right: false });
  const { gridParameters, setGridParameters } = useContext(gridContext);
  const { newElementData } = useContext(newElementContext);
  const windowWidth = document.documentElement.clientWidth;
  const resize = (e, side) => {
    if (!resizing[side]) {
      return;
    }
    const margin = side === "right" ? windowWidth - e.clientX : e.clientX;
    const gridWidth = windowWidth - margin * 2;
    setGridParameters({
      ...gridParameters,
      message: `${gridWidth < 50 ? 50 : gridWidth}px`,
      width: gridWidth < 50 ? 50 : gridWidth
    });
  };
  const startResizing = (e, side) => {
    e.persist();
    setResizing({
      ...resizing,
      [side]: true
    });
    setGridParameters({
      ...gridParameters,
      canSelect: false
    });
  };
  const stopResizing = (e, side) => {
    e.persist();
    setResizing({
      ...resizing,
      [side]: false
    });
    setGridParameters({
      ...gridParameters,
      message: "",
      canSelect: true
    });
  };
  return (
    windowWidth > gridParameters.width &&
    gridParameters.visible &&
    !newElementData.width &&
    !newElementData.height && (
      <>
        <div
          className={
            resizing.left
              ? "grid-resize-handle grid-handle-left resizing"
              : "grid-resize-handle grid-handle-left"
          }
          onMouseDown={e => startResizing(e, "left")}
          onMouseMove={e => resize(e, "left")}
          onMouseUp={e => stopResizing(e, "left")}
        />
        <div
          className={
            resizing.right
              ? "grid-resize-handle grid-handle-right resizing"
              : "grid-resize-handle grid-handle-right"
          }
          onMouseDown={e => startResizing(e, "right")}
          onMouseMove={e => resize(e, "right")}
          onMouseUp={e => stopResizing(e, "right")}
        />
      </>
    )
  );
}
