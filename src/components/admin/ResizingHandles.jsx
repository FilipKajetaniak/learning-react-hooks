import React, { useContext, useState } from "react";
import { newElementContext } from "../../context/newElementContext";
import SingleResizeHandle from "./SingleResizeHandle";
import "../../css/ResizingHandles.scss";

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
    let margin = 0;
    let gridWidth = document.documentElement.clientWidth;
    if (document.documentElement.clientWidth > 810) {
      margin = (document.documentElement.clientWidth - 810) / 2;
      gridWidth = 810;
    }
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
          left: Math.round(((e.clientX - margin) / gridWidth) * 100 * 10) / 10
        });
        break;
      case "top":
        setNewElementData({
          ...currentParameters,
          top: e.clientY
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
