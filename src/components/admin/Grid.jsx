import React, { useState } from "react";
import HelperLines from "./HelperLines";
import MouseSelection from "./MouseSelection";
import NewElement from "./NewElement";
import "../../css/Grid.scss";
import { newElementContext } from "../../context/newElementContext";

export default function Grid() {
  const [newElementData, setNewElementData] = useState({
    left: null,
    top: null,
    width: null,
    height: null,
    visible: true
  });

  return (
    <main className="wrapper">
      <newElementContext.Provider value={{ newElementData, setNewElementData }}>
        <HelperLines />
        <MouseSelection />
        <NewElement data={newElementData} />
      </newElementContext.Provider>
    </main>
  );
}
