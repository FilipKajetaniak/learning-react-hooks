import React from "react";
import "../../css/NewElement.scss";

export default function NewElement({ data }) {
  return (
    data && (
      <div
        className="new-element"
        style={
          data.top
            ? {
                left: `${data.left}%`,
                top: `${data.top}px`,
                width: `${data.width}%`,
                height: `${data.height}px`
              }
            : { display: "none" }
        }
      />
    )
  );
}
