import React, { useContext } from "react";
import "../../css/SettingsBar.scss";
import DensitySlider from "./DensitySlider";
import { gridContext } from "../../context/gridContext";
import SettingLabel from "./SettingLabel";
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
  const toggleGrid = value => {
    setGridParameters({
      ...gridParameters,
      visible: !gridParameters.visible,
      stickingToGrid: !gridParameters.stickingToGrid
    });
  };
  return (
    <div className="settings-bar">
      <SettingLabel label="Grid density">
        <DensitySlider
          onUpdated={updateLines}
          value={gridParameters.verticalLines}
        />
      </SettingLabel>
      <SettingLabel label="Show grid">
        <Switch onSwitch={toggleGrid} />
      </SettingLabel>
    </div>
  );
}
