import React, { useState } from "react";
import "../../css/Switch.scss";

export default function Switch() {
  const [on, setOn] = useState(false);
  return (
    <div
      className={on ? "switch switched-on" : "switch"}
      onClick={() => {
        setOn(!on);
      }}
    >
      <div className="switch-knob" />
    </div>
  );
}
