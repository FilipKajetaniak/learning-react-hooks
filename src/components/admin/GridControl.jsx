import React, { useRef, useContext } from "react";
import "../../css/GridControl.scss";
import { gridContext } from "../../context/gridContext";

export default function GridControl() {
  const { gridParameters, setGridParameters } = useContext(gridContext);
  const horizontalLines = useRef();
  const verticalLines = useRef();
  const gridWidth = useRef();
  const submit = () => {
    setGridParameters({
      ...gridParameters,
      horizontalLines: horizontalLines.current.value,
      verticalLines: verticalLines.current.value,
      width: Number(gridWidth.current.value)
    });
  };
  const toggleGrid = () => {
    setGridParameters({
      ...gridParameters,
      visible: !gridParameters.visible
    });
  };
  const toggleSelecting = () => {
    setGridParameters({
      ...gridParameters,
      canSelect: !gridParameters.canSelect
    });
  };
  // TEMPORARY HIDDEN - REMEMBER TO REMOVE DISPLAY: NONE FROM SCSS FILE
  return (
    <div className="grid-control">
      {/* Grid width: <br />
      <input
        type="number"
        ref={gridWidth}
        defaultValue={gridParameters.width}
        name="gridWidth"
      />{" "}
      <br />
      horizontal lines: <br />
      <input
        type="number"
        ref={horizontalLines}
        defaultValue={gridParameters.horizontalLines}
        name="horizontalLines"
      />{" "}
      <br />
      vertical lines: <br />
      <input
        type="number"
        ref={verticalLines}
        defaultValue={gridParameters.verticalLines}
        name="verticalLines"
      />{" "}
      <br />
      <button onClick={submit}>Save</button>
      <br />
      <button onClick={toggleGrid}>Toggle grid</button> <br />
      <button onClick={toggleSelecting}>
        {gridParameters.canSelect ? "Disable selecting" : "Enable selecting"}
      </button> */}
    </div>
  );
}
