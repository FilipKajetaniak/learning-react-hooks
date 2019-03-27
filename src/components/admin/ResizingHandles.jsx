import React, { useContext } from "react";
import { newElementContext } from "../../context/newElementContext";
import SingleResizeHandle from "./SingleResizeHandle";
import "../../css/ResizingHandles.scss";
import getMarginWidth from "../../utils/getMarginWidth";
import { gridContext } from "../../context/gridContext";

export default function ResizingHandles({ currentParameters }) {
  const { setNewElementData } = useContext(newElementContext);
  const { gridParameters } = useContext(gridContext);
  const sides = [
    "top",
    "bottom",
    "left",
    "right",
    "top-right",
    "top-left",
    "bottom-right",
    "bottom-left"
  ];

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

  const resizing = (e, side) => {
    e.persist();
    const { margin, gridWidth } = getMarginWidth(gridParameters.width);
    switch (side) {
      case "right":
        setNewElementData({
          ...currentParameters,
          width: withMinWidth(
            Math.round(
              ((e.clientX -
                margin -
                (currentParameters.left / 100) * gridWidth) /
                gridWidth) *
                100 *
                10
            ) / 10
          )
        });
        break;
      case "bottom":
        setNewElementData({
          ...currentParameters,
          height: withMinHeight(e.clientY - currentParameters.top)
        });
        break;
      case "left":
        setNewElementData({
          ...currentParameters,
          left: Math.round(((e.clientX - margin) / gridWidth) * 100 * 10) / 10,
          width: withMinWidth(
            currentParameters.width +
              (currentParameters.left -
                Math.round(((e.clientX - margin) / gridWidth) * 100 * 10) / 10)
          )
        });
        break;
      case "top":
        setNewElementData({
          ...currentParameters,
          top: e.clientY,
          height: withMinHeight(
            currentParameters.height + (currentParameters.top - e.clientY)
          )
        });
        break;
      case "bottom-right":
        setNewElementData({
          ...currentParameters,
          width: withMinWidth(
            Math.round(
              ((e.clientX -
                margin -
                (currentParameters.left / 100) * gridWidth) /
                gridWidth) *
                100 *
                10
            ) / 10
          ),
          height: withMinHeight(e.clientY - currentParameters.top)
        });
        break;
      case "top-right":
        setNewElementData({
          ...currentParameters,
          top: e.clientY,
          height: withMinHeight(
            currentParameters.height + (currentParameters.top - e.clientY)
          ),
          width: withMinWidth(
            Math.round(
              ((e.clientX -
                margin -
                (currentParameters.left / 100) * gridWidth) /
                gridWidth) *
                100 *
                10
            ) / 10
          )
        });
        break;
      case "bottom-left":
        setNewElementData({
          ...currentParameters,
          height: withMinHeight(e.clientY - currentParameters.top),
          left: Math.round(((e.clientX - margin) / gridWidth) * 100 * 10) / 10,
          width: withMinWidth(
            currentParameters.width +
              (currentParameters.left -
                Math.round(((e.clientX - margin) / gridWidth) * 100 * 10) / 10)
          )
        });
        break;
      case "top-left":
        setNewElementData({
          ...currentParameters,
          left: Math.round(((e.clientX - margin) / gridWidth) * 100 * 10) / 10,
          width: withMinWidth(
            currentParameters.width +
              (currentParameters.left -
                Math.round(((e.clientX - margin) / gridWidth) * 100 * 10) / 10)
          ),
          top: e.clientY,
          height: withMinHeight(
            currentParameters.height + (currentParameters.top - e.clientY)
          )
        });
        break;
      default:
        return;
    }
  };

  return (
    <>
      {sides.map(singleSide => (
        <SingleResizeHandle
          side={singleSide}
          key={singleSide}
          onResizing={(e, side) => {
            resizing(e, side);
          }}
        />
      ))}
    </>
  );
}
