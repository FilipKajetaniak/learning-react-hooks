import React, { useState } from "react";

export default function SingleResizeHandle(props) {
  const [isResizing, setIsResizing] = useState(false);
  return (
    <div
      onMouseDown={() => setIsResizing(true)}
      onMouseMove={e => {
        if (isResizing) {
          props.onResizing(e, props.side);
        }
      }}
      onMouseUp={() => setIsResizing(false)}
      className={
        isResizing
          ? `${props.side}-side-handle resized`
          : `${props.side}-side-handle`
      }
    />
  );
}
