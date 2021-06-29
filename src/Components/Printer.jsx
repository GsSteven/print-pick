import React from "react";

export default function Printer(props) {
  return (
    <div className="printerWrapper">
      <div className="circle" />
      <img className="printer" src={props.img} alt="" />
      <h4 className="printerName">{props.name}</h4>
    </div>
  );
}
