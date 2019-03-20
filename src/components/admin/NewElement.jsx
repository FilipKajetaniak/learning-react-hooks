import React, { useEffect } from "react";
export default function NewElement({ data }) {
  useEffect(() => {
    // console.log("New Element: ", data.top, data.left);
  });
  return data && <h3>new Element: {data.top} </h3>;
}
