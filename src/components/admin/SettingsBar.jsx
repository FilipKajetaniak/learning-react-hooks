import React, { useContext } from "react";
import "../../css/SettingsBar.scss";
import DensitySlider from "./DensitySlider";
import { gridContext } from "../../context/gridContext";
import Switch from "./Switch";
export default function SettingsBar() {
  const { gridParameters, setGridParameters } = useContext(gridContext);
  const updateLines = value => {
    setGridParameters({
      ...gridParameters,
      verticalLines: value,
      horizontalLines: Math.floor(value * 1.34)
    });
  };
  return (
    <div className="settings-bar">
      {/* <DensitySlider
        initialValue={gridParameters.verticalLines}
        onUpdated={updateLines}
      /> */}
      <Switch />
    </div>
  );
}
