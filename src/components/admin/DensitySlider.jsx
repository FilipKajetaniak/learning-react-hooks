import React, { useState } from "react";

export default function DensitySlider({ onUpdated, value }) {
  const [visiblePointer, setVisiblePointer] = useState(false);
  return (
    <div className="slider-container">
      <input
        type="range"
        min="2"
        max="54"
        value={value}
        className="slider"
        onMouseDown={() => {
          setVisiblePointer(true);
        }}
        onMouseUp={() => {
          setVisiblePointer(false);
        }}
        onChange={e => {
          onUpdated(e.target.value);
        }}
      />
      {visiblePointer && (
        <div className="slider-label" style={{ left: `${(value / 54) * 90}%` }}>
          {value}
          <div className="label-pointer" />
        </div>
      )}
    </div>
  );
}
