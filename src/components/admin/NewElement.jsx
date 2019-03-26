import React, { useContext } from "react";
import ResizingHandles from "./ResizingHandles";
import "../../css/NewElement.scss";
import { gridContext } from "../../context/gridContext";
import stickToGrid from "../../utils/stickToGrid";

export default function NewElement(props) {
  const { gridParameters } = useContext(gridContext);
  const data = stickToGrid(props.data, gridParameters);
  return (
    data && (
      <div
        className="new-element"
        style={
          data.top || data.left || data.width || data.height
            ? {
                left: `${data.left}%`,
                top: `${data.top}px`,
                width: `${data.width}%`,
                height: `${data.height}px`
              }
            : { display: "none" }
        }
      >
        <ResizingHandles currentParameters={data} />
      </div>
    )
  );
}
