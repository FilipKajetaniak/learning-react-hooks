import React, { useState } from "react";
import HelperLines from "./HelperLines";
import MouseSelection from "./MouseSelection";
import NewElement from "./NewElement";
import "../../css/Grid.scss";
import { gridContext } from "../../context/gridContext";

const initialState = {
  left: null,
  top: null,
  width: null,
  height: null
};

export default function Grid() {
  const [newElementData, setNewElementData] = useState(initialState);
  return (
    <main className="wrapper">
      <gridContext.Provider value={{ newElementData, setNewElementData }}>
        <HelperLines />
        <MouseSelection />
        <NewElement data={newElementData} />
      </gridContext.Provider>
    </main>
  );
}
