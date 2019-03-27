import React, { useContext } from "react";
import ResizingHandles from "./ResizingHandles";
import MovingHandle from "./MovingHandle";
import "../../css/NewElement.scss";
import { gridContext } from "../../context/gridContext";
import stickToGrid from "../../utils/stickToGrid";
import NewElementControls from "./NewElementControls";

export default function NewElement(props) {
  const { gridParameters } = useContext(gridContext);
  const data = gridParameters.stickingToGrid
    ? stickToGrid(props.data, gridParameters)
    : props.data;
  return (
    !!(data.top && data.left && data.width && data.height) && (
      <div
        className="new-element"
        style={{
          left: `${data.left}%`,
          top: `${data.top}px`,
          width: `${data.width}%`,
          height: `${data.height}px`
        }}
      >
        <MovingHandle currentParameters={data} />
        <ResizingHandles currentParameters={data} />
        <NewElementControls />
      </div>
    )
  );
}
