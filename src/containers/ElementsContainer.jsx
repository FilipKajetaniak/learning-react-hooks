import React, { useContext } from "react";
import { elementsContext } from "../context/elementsContext";
import Element from "../components/admin/Element";

export default function ElementsContainer() {
  const { elements } = useContext(elementsContext);
  return (
    <div>
      {elements.map(element => {
        return <Element data={element} key={element.id} />;
      })}
    </div>
  );
}
