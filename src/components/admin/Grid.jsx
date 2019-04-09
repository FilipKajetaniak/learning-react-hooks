import React, { useState, useContext } from "react";
import HelperLines from "./HelperLines";
import MouseSelection from "./MouseSelection";
import NewElement from "./NewElement";
import "../../css/Grid.scss";
import { newElementContext } from "../../context/newElementContext";
import { gridContext } from "../../context/gridContext";
import GridResizeHandles from "./GridResizeHandles";
import InfoModal from "./InfoModal";
import SettingsBar from "./SettingsBar";
import BottomBar from "./BottomBar";

export default function Grid() {
  const { gridParameters } = useContext(gridContext);
  const [newElementData, setNewElementData] = useState({
    left: null,
    top: null,
    width: null,
    height: null,
    visible: true
  });
  return (
    <newElementContext.Provider value={{ newElementData, setNewElementData }}>
      <SettingsBar />
      <div className="scroll-container">
        <main className="wrapper" style={{ maxWidth: gridParameters.width }}>
          <div className="grid">
            <HelperLines />
            <MouseSelection />
            <NewElement data={newElementData} />
          </div>
          <GridResizeHandles />
        </main>
      </div>
      <BottomBar message={gridParameters.message} />
    </newElementContext.Provider>
  );
}
