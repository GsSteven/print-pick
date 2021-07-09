import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import { motion, AnimatePresence } from "framer-motion";
import Printer from "./Printer";

export default function Search(props) {
  const [search, setSearch] = useState("");
  const [currentList, setCurrentList] = useState([]);
  const [filteredList, setFilteredList] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    if (value) {
      //if name or brand of printer matches search, set filtered printers
      const filteredElements = currentList.filter((printer) => {
        return (
          printer.props.name.toLowerCase().indexOf(value) !== -1 ||
          printer.props.brand.toLowerCase().indexOf(value) !== -1
        );
      });
      setFilteredList(filteredElements);
    } else {
      setFilteredList(null);
    }
  };

  const getInRange = (value, price) => {
    switch (value) {
      case "under250":
        return price < 250;
      case "250to500":
        return 250 <= price && price < 500;
      case "500to1000":
        return 500 <= price && price < 1000;
      case "1000to2000":
        return 1000 <= price && price < 2000;
      case "2000plus":
        return price >= 2000;
      case "all":
        return price > 0;
      default:
        console.error("error at range switch");
    }
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    let newList;
    //search filtered list if search is present
    if (search) {
      newList = filteredList.filter((printer) => {
        const inRange = getInRange(value, printer.props.price);
        return inRange;
      });
    } else {
      newList = currentList.filter((printer) => {
        const inRange = getInRange(value, printer.props.price);
        return inRange;
      });
    }
    setFilteredList(newList);
  };

  const displayPrinters = (array) => {
    const printerElements = array.map((printer, index) => {
      if (index > 2) {
        return (
          <LazyLoad once offset={200}>
            <Printer
              brand={printer.brand}
              name={printer.name}
              img={printer.img}
              price={printer.price}
              buildArea={printer.buildArea}
              link={printer.link}
              key={printer + index}
            />
          </LazyLoad>
        );
      } else {
        return (
          <Printer
            brand={printer.brand}
            name={printer.name}
            img={printer.img}
            price={printer.price}
            buildArea={printer.buildArea}
            link={printer.link}
            key={printer + index}
          />
        );
      }
    });
    setCurrentList(printerElements);
  };

  useEffect(() => {
    const printersArray = [];
    props.printers.forEach((printerBrand) => {
      printerBrand.printers.forEach((printer) => {
        //push brand name into printer object
        printer.brand = printerBrand.name;
        printersArray.push(printer);
      });
    });
    displayPrinters(printersArray);
  }, [props.printers]);

  return (
    <div className="searchWrapper">
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search"
        autoComplete="off"
        value={search}
        onChange={handleChange}
      />
      <br />
      <button
        className="filterButton"
        onClick={() => {
          setShowFilter((current) => !current);
        }}
      >
        Filter
      </button>
      <AnimatePresence>
        {showFilter && (
          <motion.div
            className="filterDropDown"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.2,
                type: "tween",
              },
            }}
            exit={{ opacity: 0, y: -10 }}
          >
            <p>Price:</p>
            <div className="radioButtons" onChange={handleFilter}>
              <div className="radioContainer">
                <input
                  type="radio"
                  id="under250"
                  value="under250"
                  name="priceFilter"
                />
                <label htmlFor="under250">Under $250</label>
              </div>
              <div className="radioContainer">
                <input
                  type="radio"
                  id="250to500"
                  value="250to500"
                  name="priceFilter"
                />
                <label htmlFor="250to500">$250 - $500</label>
              </div>
              <div className="radioContainer">
                <input
                  type="radio"
                  id="500to1000"
                  value="500to1000"
                  name="priceFilter"
                />
                <label htmlFor="500to1000">$500 - $1000</label>
              </div>
              <div className="radioContainer">
                <input
                  type="radio"
                  id="1000to2000"
                  value="1000to2000"
                  name="priceFilter"
                />
                <label htmlFor="1000to2000">$1000 - $2000</label>
              </div>
              <div className="radioContainer">
                <input
                  type="radio"
                  id="2000plus"
                  value="2000plus"
                  name="priceFilter"
                />
                <label htmlFor="2000plus">$2000+</label>
              </div>
              <div className="radioContainer">
                <input type="radio" id="all" value="all" name="priceFilter" />
                <label htmlFor="all">All</label>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="searchList">
        {filteredList ? filteredList : currentList}
      </div>
    </div>
  );
}
