import React, { useState } from "react";
import "../../css/Switch.scss";

export default function Switch({ onSwitch }) {
  const [on, setOn] = useState(false);
  return (
    <div
      className={on ? "switch switched-on" : "switch"}
      onClick={() => {
        setOn(!on);
        onSwitch();
      }}
    >
      <div className="switch-knob" />
    </div>
  );
}
