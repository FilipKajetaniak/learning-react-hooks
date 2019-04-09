import React from "react";
import "../../css/BottomBar.scss";
export default function BottomBar({ message }) {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-left">{message}</div>
    </div>
  );
}
