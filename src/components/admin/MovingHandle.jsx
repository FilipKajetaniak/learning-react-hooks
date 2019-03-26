import React, { useContext, useState } from "react";
import "../../css/MovingHandle.scss";
import { newElementContext } from "../../context/newElementContext";
import getMarginWidth from "../../utils/getMarginWidth";

export default function MovingHandle({ currentParameters }) {
  const { setNewElementData } = useContext(newElementContext);
  const [isMoving, setIsMoving] = useState(false);
  const { margin, gridWidth } = getMarginWidth();
  return (
    <div
      className={isMoving ? "moving-handle moving" : "moving-handle"}
      onMouseDown={() => setIsMoving(true)}
      onMouseUp={() => setIsMoving(false)}
      onMouseMove={e => {
        e.persist();
        if (!isMoving) {
          return;
        }
        setNewElementData({
          ...currentParameters,
          top: e.clientY - currentParameters.height / 2,
          left:
            Math.round(((e.clientX - margin) / gridWidth) * 100 * 10) / 10 -
            currentParameters.width / 2
        });
      }}
    />
  );
}
