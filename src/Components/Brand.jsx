import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import Printer from "./Printer";

export default function Brand(props) {
  const [printers, setPrinters] = useState([]);

  useEffect(() => {
    const displayPrinters = () => {
      const printersList = props.printers.map((printer, index) => {
        if (index > 2) {
          return (
            <LazyLoad once offset={200}>
              <Printer
                name={printer.name}
                img={printer.img}
                price={printer.price}
                buildArea={printer.buildArea}
                link={printer.link}
                key={printer + index}
              />
            </LazyLoad>
          );
        }
        return (
          <Printer
            name={printer.name}
            img={printer.img}
            price={printer.price}
            buildArea={printer.buildArea}
            link={printer.link}
            key={printer + index}
          />
        );
      });
      setPrinters(printersList);
    };
    displayPrinters();
  }, [props.printers]);

  return (
    <div className="brandWrapper">
      <h1>
        <u>{props.name}</u>
      </h1>
      <div className="printerList">{printers}</div>
    </div>
  );
}
