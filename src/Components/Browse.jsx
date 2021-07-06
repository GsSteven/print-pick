import React from "react";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0.5 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.01,
      staggerChildren: 0.2,
    },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};

export default function Browse(props) {
  const displayBrands = () => {
    const brands = props.printers.map((brand, index) => {
      //for link ref
      const lowerCaseName = brand.name.toLowerCase();
      //for random image from brand
      const randomIndex = Math.floor(Math.random() * brand.printers.length);
      //get average price
      const randomImage = brand.printers[randomIndex].img;
      const priceArray = brand.printers.map((printer) => printer.price);
      const lowestPrice = Math.min(...priceArray);
      const highestPrice = Math.max(...priceArray);
      const averagePrice = (
        priceArray.reduce((a, b) => a + b) / brand.printers.length
      ).toFixed(0);

      //return every other brand as header first then image
      if (!(index % 2)) {
        return (
          <motion.div
            className="brand"
            onClick={() => (window.location.href = `./browse/${lowerCaseName}`)}
            key={brand.name + index}
            variants={childVariant}
          >
            <div>
              <h1>{brand.name}</h1>
              <p>
                Avg Price: <span className="price">${averagePrice}</span>
              </p>
              <div className="lowestHighest">
                <p>
                  Lowest: <span className="price">${lowestPrice}</span>
                </p>
                <p>
                  Highest: <span className="price">${highestPrice}</span>
                </p>
              </div>
            </div>
            <img src={randomImage} alt={brand.name} />
          </motion.div>
        );
      } else {
        return (
          <motion.div
            className="brand"
            onClick={() => (window.location.href = `./browse/${lowerCaseName}`)}
            key={brand.name + index}
            variants={childVariant}
          >
            <img src={randomImage} alt={brand.name} />
            <div>
              <h1>{brand.name}</h1>
              <p>
                Avg Price: <span className="price">${averagePrice}</span>
              </p>
              <div className="lowestHighest">
                <p>
                  Lowest: <span className="price">${lowestPrice}</span>
                </p>
                <p>
                  Highest: <span className="price">${highestPrice}</span>
                </p>
              </div>
            </div>
          </motion.div>
        );
      }
    });
    return brands;
  };

  return (
    <div className="browseWrapper">
      <motion.div
        className="browseList"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {displayBrands()}
      </motion.div>
    </div>
  );
}
