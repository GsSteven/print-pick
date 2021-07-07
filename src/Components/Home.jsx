import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Printer from "./Printer";

const fadeInVariant = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
      delay: custom,
    },
  }),
};

export default function Home(props) {
  const [currentPrinters, setCurrentPrinters] = useState(null);

  useEffect(() => {
    const randomPrinters = () => {
      //arrange all printers from all brands
      const printersArray = [];
      const selectedPrinters = [];
      props.printers.forEach((brand) => {
        const printers = brand.printers;
        const brandName = brand.name;
        printers.forEach((printer) => {
          printer.brand = brandName;
          printersArray.push(printer);
        });
      });
      //get 3 random printers
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * printersArray.length);
        selectedPrinters.push(printersArray[randomIndex]);
      }
      //create printer elements
      const printerElements = selectedPrinters.map((printer, index) => {
        const { brand, name, buildArea, img, link } = printer;
        return (
          <Printer
            brand={brand}
            name={name}
            buildArea={buildArea}
            img={img}
            link={link}
            key={index + name}
          />
        );
      });
      //set printers
      setCurrentPrinters(printerElements);
    };
    randomPrinters();
  }, [props.printers]);

  return (
    <div className="homeWrapper">
      <motion.div
        className="mainHead"
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.1,
            duration: 0.5,
            type: "tween",
          },
        }}
      >
        <h1 id="header1">
          Find the Printer{" "}
          <span id="header2">
            For <span id="colorLetter">You</span>
          </span>
        </h1>
      </motion.div>
      <motion.div
        className="body"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        custom={0.75}
      >
        {currentPrinters}
        <div className="antiClick" />
      </motion.div>
      <motion.div
        className="buttonContainer"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <button className="getStarted">
          <Link className="getStartedLink" to="/browse">
            Get Started
          </Link>
        </button>
      </motion.div>
    </div>
  );
}
