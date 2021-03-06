import React, { useEffect, useContext } from "react";
import "../../css/NewElementControls.scss";
import { gridContext } from "../../context/gridContext";
import { newElementContext } from "../../context/newElementContext";

export default function NewElementControls() {
  const { gridParameters, setGridParameters } = useContext(gridContext);
  const { setNewElementData } = useContext(newElementContext);
  useEffect(() => {
    setGridParameters({
      ...gridParameters,
      canSelect: false
    });
  }, []);
  const accept = () => {
    setNewElementData({
      left: null,
      top: null,
      width: null,
      height: null,
      visible: true
    });
    setGridParameters({
      ...gridParameters,
      canSelect: true
    });
  };
  const cancel = () => {
    setNewElementData({
      left: null,
      top: null,
      width: null,
      height: null,
      visible: true
    });
    setGridParameters({
      ...gridParameters,
      canSelect: true
    });
  };
  return (
    <div className="new-element-controls">
      <div onClick={accept} className="save-icon" />
      <div onClick={cancel} className="edit-icon" />
    </div>
  );
}
