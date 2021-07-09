import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import ExpandedPrinter from "./ExpandedPrinter";

export default function Printer(props) {
  const [expanded, setExpanded] = useState(false);

  //include brand name if brand prop passed
  const brand = props.brand ? props.brand : "";

  return (
    <div className="printerWrapper">
      <div className="circle" />
      <LazyLoad once offset={200}>
        <img
          className="printer"
          src={props.img}
          alt=""
          loading="lazy"
          onClick={() => setExpanded((current) => !current)}
        />
      </LazyLoad>
      <h4 className="printerName">{brand + " " + props.name}</h4>
      {props.price && <h3 className="printerPrice">${props.price}</h3>}
      {expanded && <ExpandedPrinter {...props} close={setExpanded} />}
    </div>
  );
}
