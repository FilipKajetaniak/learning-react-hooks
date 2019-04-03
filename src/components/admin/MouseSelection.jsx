import React, { useState, useEffect, useContext } from "react";
import Selection from "./Selection";
import { newElementContext } from "../../context/newElementContext";
import { gridContext } from "../../context/gridContext";
import calculateMouseSelection from "../../utils/calculateMouseSelection";

export default function MouseSelection() {
  const [isResizing, setResizing] = useState(false);
  const [startingMousePosition, setStartingMousePosition] = useState({
    x: null,
    y: null
  });
  const [endingMousePosition, setEndingMousePosition] = useState({
    x: null,
    y: null
  });
  const { setNewElementData } = useContext(newElementContext);
  const { gridParameters, setGridParameters } = useContext(gridContext);
  const resizing = e => {
    if (!isResizing || !gridParameters.canSelect) {
      return;
    }

    setEndingMousePosition({
      x: e.clientX,
      y: e.clientY + gridParameters.scrollPosition
    });
  };
  const startResizing = e => {
    e.preventDefault();
    if (gridParameters.canSelect === false) {
      return;
    }
    setResizing(true);
    setStartingMousePosition({
      x: e.clientX,
      y: e.clientY + gridParameters.scrollPosition
    });
  };
  const stopResizing = e => {
    if (!gridParameters.canSelect) {
      return;
    }
    setNewElementData(
      calculateMouseSelection(
        startingMousePosition,
        endingMousePosition,
        gridParameters.width
      )
    );
    setResizing(false);
    setEndingMousePosition({ x: null, y: null });
    setStartingMousePosition({ x: null, y: null });
  };
  const updateScroll = e => {
    setGridParameters({
      ...gridParameters,
      scrollPosition: window.scrollY
    });
  };
  useEffect(() => {
    const grid = document.querySelector(".grid");
    grid.addEventListener("mousemove", resizing);
    grid.addEventListener("mousedown", startResizing);
    grid.addEventListener("mouseup", stopResizing);
    window.addEventListener("scroll", updateScroll);
    return () => {
      grid.removeEventListener("mousemove", resizing);
      grid.removeEventListener("mousedown", startResizing);
      grid.removeEventListener("mouseup", stopResizing);
      window.removeEventListener("scroll", updateScroll);
    };
  });
  return (
    <>
      {isResizing && (
        <Selection
          startingPosition={startingMousePosition}
          endingPosition={endingMousePosition}
        />
      )}
    </>
  );
}
