import React, { useState } from "react";
import ExpandedPrinter from "./ExpandedPrinter";

export default function Printer(props) {
  const [expanded, setExpanded] = useState(false);

  //include brand name if brand prop passed
  const brand = props.brand ? props.brand : "";

  return (
    <div
      className="printerWrapper"
      onClick={() => setExpanded((current) => !current)}
    >
      <div className="circle" />
      <img className="printer" src={props.img} alt="" />
      <h4 className="printerName">{brand + " " + props.name}</h4>
      {props.price && <h3 className="printerPrice">${props.price}</h3>}
      {expanded && (
        <ExpandedPrinter {...props} close={() => setExpanded(false)} />
      )}
    </div>
  );
}
