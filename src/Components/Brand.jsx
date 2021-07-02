import React, { useState, useEffect } from "react";
import Printer from "./Printer";

export default function Brand(props) {
  const [printers, setPrinters] = useState([]);

  const displayPrinters = () => {
    const printersList = props.printers.map((printer) => {
      return (
        <Printer
          name={printer.name}
          img={printer.img}
          price={printer.price}
          buildArea={printer.buildArea}
          link={printer.link}
        />
      );
    });
    setPrinters(printersList);
  };

  useEffect(() => {
    displayPrinters();
  }, []);

  return (
    <div className="brandWrapper">
      <h1>
        <u>{props.name}</u>
      </h1>
      <div className="printerList">{printers}</div>
    </div>
  );
}
