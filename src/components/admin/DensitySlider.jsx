import React from "react";
export default function DensitySlider({ initialValue, onUpdated }) {
  return (
    <input
      type="range"
      min="2"
      max="54"
      defaultValue={initialValue}
      className="slider"
      onChange={e => {
        onUpdated(e.target.value);
      }}
    />
  );
}
