import React from "react";
import { motion } from "framer-motion";
import Printer from "./Printer";

//img imports
import prusa from "./../images/Prusa/Prusa-i3.png";
import maker from "./../images/MakerBot/makerBotReplicator.png";
import lulz from "./../images/LulzBot/lulzBotWorkhorse.png";

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

export default function Home() {
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
        <Printer img={prusa} name="Prusa" />
        <Printer img={maker} name="MakerBot" />
        <Printer img={lulz} name="LulzBot" />
      </motion.div>
      <motion.div
        className="buttonContainer"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <button
          className="getStarted"
          onClick={() => (window.location.href = "./browse")}
        >
          Get Started
        </button>
      </motion.div>
    </div>
  );
}
