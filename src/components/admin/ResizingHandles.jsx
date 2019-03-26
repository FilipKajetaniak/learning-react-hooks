import React, { useContext, useState } from "react";
import { newElementContext } from "../../context/newElementContext";
import SingleResizeHandle from "./SingleResizeHandle";
import "../../css/ResizingHandles.scss";
import getMarginWidth from "../../utils/getMarginWidth";

export default function ResizingHandles({ currentParameters }) {
  const { setNewElementData } = useContext(newElementContext);
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
  const resizing = (e, side) => {
    e.persist();
    const { margin, gridWidth } = getMarginWidth();
    switch (side) {
      case "right":
        setNewElementData({
          ...currentParameters,
          width:
            Math.round(
              ((e.clientX -
                margin -
                (currentParameters.left / 100) * gridWidth) /
                gridWidth) *
                100 *
                10
            ) / 10
        });
        break;
      case "bottom":
        setNewElementData({
          ...currentParameters,
          height: e.clientY - currentParameters.top
        });
        break;
      case "left":
        setNewElementData({
          ...currentParameters,
          left: Math.round(((e.clientX - margin) / gridWidth) * 100 * 10) / 10,
          width:
            currentParameters.width +
            (currentParameters.left -
              Math.round(((e.clientX - margin) / gridWidth) * 100 * 10) / 10)
        });
        break;
      case "top":
        setNewElementData({
          ...currentParameters,
          top: e.clientY,
          height: currentParameters.height + (currentParameters.top - e.clientY)
        });
        break;
      case "bottom-right":
        setNewElementData({
          ...currentParameters,
          width:
            Math.round(
              ((e.clientX -
                margin -
                (currentParameters.left / 100) * gridWidth) /
                gridWidth) *
                100 *
                10
            ) / 10,
          height: e.clientY - currentParameters.top
        });
        break;
      case "top-right":
        setNewElementData({
          ...currentParameters,
          top: e.clientY,
          height:
            currentParameters.height + (currentParameters.top - e.clientY),
          width:
            Math.round(
              ((e.clientX -
                margin -
                (currentParameters.left / 100) * gridWidth) /
                gridWidth) *
                100 *
                10
            ) / 10
        });
        break;
      case "bottom-left":
        setNewElementData({
          ...currentParameters,
          height: e.clientY - currentParameters.top,
          left: Math.round(((e.clientX - margin) / gridWidth) * 100 * 10) / 10,
          width:
            currentParameters.width +
            (currentParameters.left -
              Math.round(((e.clientX - margin) / gridWidth) * 100 * 10) / 10)
        });
        break;
      case "top-left":
        setNewElementData({
          ...currentParameters,
          left: Math.round(((e.clientX - margin) / gridWidth) * 100 * 10) / 10,
          width:
            currentParameters.width +
            (currentParameters.left -
              Math.round(((e.clientX - margin) / gridWidth) * 100 * 10) / 10),
          top: e.clientY,
          height: currentParameters.height + (currentParameters.top - e.clientY)
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
