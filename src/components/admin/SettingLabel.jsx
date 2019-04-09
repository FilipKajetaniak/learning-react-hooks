import React from "react";
import "../../css/SettingLabel.scss";

export default function SettingLabel({ children, label }) {
  return (
    <div className="setting-label">
      {label}
      {children}
    </div>
  );
}
