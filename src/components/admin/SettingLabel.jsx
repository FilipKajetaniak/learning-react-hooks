import React from "react";
import "../../css/SettingLabel.scss";

export default function SettingLabel({ children, label }) {
  return (
    <div className="setting-label">
      <div className="label-text">{label}</div>
      <div className="label-option">{children}</div>
    </div>
  );
}
