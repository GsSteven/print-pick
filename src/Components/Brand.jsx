import React, { useState, useEffect } from "react";
import Printer from "./Printer";

export default function Brand(props) {
  const [printers, setPrinters] = useState([]);
  const displayPrinters = () => {
    const printersList = props.printers.map((printer) => {
      return <Printer name={printer.name} img={printer.img} />;
    });
    setPrinters(printersList);
  };

  useEffect(() => {
    displayPrinters();
  }, []);

  return (
    <div className="brandWrapper">
      <h1>{props.name}</h1>
      <div className="printerList">{printers}</div>
    </div>
  );
}
