import React from "react";
import "../../css/Element.scss";
export default function({ data }) {
  return (
    <div
      className="element"
      style={{
        left: `${data.style.left}%`,
        top: `${data.style.top}px`,
        width: `${data.style.width}%`,
        height: `${data.style.height}px`
      }}
    />
  );
}
