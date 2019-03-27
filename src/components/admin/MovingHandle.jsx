import React, { useContext, useState, useRef } from "react";
import "../../css/MovingHandle.scss";
import { newElementContext } from "../../context/newElementContext";
import getMarginWidth from "../../utils/getMarginWidth";
import { gridContext } from "../../context/gridContext";

export default function MovingHandle({ currentParameters }) {
  const { setNewElementData } = useContext(newElementContext);
  const { gridParameters } = useContext(gridContext);
  const [offset, setOffset] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const { margin, gridWidth } = getMarginWidth(gridParameters.width);
  const movingHandleDiv = useRef();

  return (
    <div
      ref={movingHandleDiv}
      className={isMoving ? "moving-handle moving" : "moving-handle"}
      onMouseDown={e => {
        setOffset({
          top: e.clientY - movingHandleDiv.current.parentElement.offsetTop,
          left:
            Math.round(
              (e.clientX -
                margin -
                (currentParameters.left * gridWidth) / 100) *
                10
            ) / 10
        });
        setIsMoving(true);
      }}
      onMouseUp={() => {
        setIsMoving(false);
      }}
      onMouseMove={e => {
        e.persist();
        if (!isMoving) {
          return;
        }
        setNewElementData({
          ...currentParameters,
          top: e.clientY - offset.top,
          left:
            Math.round(
              ((e.clientX - margin - offset.left) / gridWidth) * 1000
            ) / 10
        });
      }}
    />
  );
}
