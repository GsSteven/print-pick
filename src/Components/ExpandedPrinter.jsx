import React, { useEffect } from "react";

import closeButton from "./../images/closeButton.svg";

export default function ExpandedPrinter(props) {
  return (
    <div className="expandedPrintWrapper">
      <div className="dimentionBox">
        <div className="printerCard">
          <button className="closeExpanded" onClick={() => props.close()}>
            <img src={closeButton} alt="close" />
          </button>
          <div className="expandedPrinter">
            <img src={props.img} alt={props.name} />
          </div>
          {props.brand && <h1 className="expandedBrand">{props.brand}</h1>}
          <h2 className="expandedName">{props.name}</h2>
          {props.price && (
            <h3 className="expandedPrice">Price: ${props.price}</h3>
          )}
          <h4 className="expandedBuildArea">
            Build Area:{" "}
            {`${props.buildArea[0]} x ${props.buildArea[1]} x ${props.buildArea[2]}`}
          </h4>
          <a href={props.link} target="_blank" rel="noreferrer">
            Original Site
          </a>
        </div>
      </div>
    </div>
  );
}
