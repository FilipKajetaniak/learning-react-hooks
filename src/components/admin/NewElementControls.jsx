import React, { useEffect, useContext } from "react";
import "../../css/NewElementControls.scss";
import { gridContext } from "../../context/gridContext";
import { newElementContext } from "../../context/newElementContext";

export default function NewElementControls(props) {
  const { gridParameters, setGridParameters } = useContext(gridContext);
  const { newElementData, setNewElementData } = useContext(newElementContext);
  useEffect(() => {
    setGridParameters({
      ...gridParameters,
      canSelect: false
    });
  }, []);
  const accept = () => {
    props.onAccept();
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
      <button onClick={accept}>Accept</button> <br />
      <button onClick={cancel}>Cancel</button>
    </div>
  );
}
