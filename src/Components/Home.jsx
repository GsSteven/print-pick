import React from "react";
import Printer from "./Printer";

//img imports
import prusa from "./../images/Prusa-i3.png";
import maker from "./../images/makerBotReplicator.png";
import lullz from "./../images/lullzbot6.png";

export default function Home() {
  return (
    <div className="homeWrapper">
      <div className="mainHead">
        <h1 id="header1">
          Find the Printer{" "}
          <span id="header2">
            For <span id="colorLetter">You</span>
          </span>
        </h1>
        <h1 id="header2"></h1>
      </div>
      <div className="body">
        <Printer img={prusa} name="Prusa" />
        <Printer img={maker} name="MakerBot" />
        <Printer img={lullz} name="LulzBot" />
      </div>
    </div>
  );
}
