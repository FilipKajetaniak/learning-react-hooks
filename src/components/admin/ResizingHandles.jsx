import React, { useContext } from "react";
import { newElementContext } from "../../context/newElementContext";
import SingleResizeHandle from "./SingleResizeHandle";
import "../../css/ResizingHandles.scss";
import getMarginWidth from "../../utils/getMarginWidth";
import { gridContext } from "../../context/gridContext";

export default function ResizingHandles({ currentParameters }) {
  const { setNewElementData } = useContext(newElementContext);
  const { gridParameters } = useContext(gridContext);
  const gridElement = document.querySelector(".wrapper");
  const applyTopMargin = top => top - gridElement.offsetTop;
  const withMinWidth = width => {
    const cellWidth =
      Math.round(
        (gridParameters.width /
          gridParameters.verticalLines /
          gridParameters.width) *
          100 *
          10
      ) / 10;
    return width < cellWidth ? cellWidth : width;
  };
  const withMinHeight = height => {
    const cellHeight = gridParameters.height / gridParameters.horizontalLines;
    return height < cellHeight ? cellHeight : height;
  };
  const withMaxWidth = width => {
    return width + currentParameters.left >= 100
      ? 100 - currentParameters.left
      : width;
  };
  const resizing = (e, side) => {
    e.persist();
    const { margin, gridWidth } = getMarginWidth(gridParameters.width);
    switch (side) {
      case "right":
        setNewElementData({
          ...currentParameters,
          width: withMaxWidth(
            withMinWidth(
              Math.round(
                ((e.clientX -
                  margin -
                  (currentParameters.left / 100) * gridWidth) /
                  gridWidth) *
                  100 *
                  10
              ) / 10
            )
          )
        });
        break;
      case "bottom":
        setNewElementData({
          ...currentParameters,
          height:
            withMinHeight(applyTopMargin(e.clientY - currentParameters.top)) +
            gridParameters.scrollPosition
        });
        break;
      case "bottom-right":
        setNewElementData({
          ...currentParameters,
          width: withMaxWidth(
            withMinWidth(
              Math.round(
                ((e.clientX -
                  margin -
                  (currentParameters.left / 100) * gridWidth) /
                  gridWidth) *
                  100 *
                  10
              ) / 10
            )
          ),
          height:
            withMinHeight(applyTopMargin(e.clientY - currentParameters.top)) +
            gridParameters.scrollPosition
        });
        break;
      default:
        return;
    }
  };

  return (
    <>
      <SingleResizeHandle
        side="right"
        onResizing={(e, side) => {
          resizing(e, side);
        }}
      />
      <SingleResizeHandle
        side="bottom"
        onResizing={(e, side) => {
          resizing(e, side);
        }}
      />
      <SingleResizeHandle
        side="bottom-right"
        onResizing={(e, side) => {
          resizing(e, side);
        }}
      />
    </>
  );
}
