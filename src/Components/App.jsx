import React from "react";
import NavBar from "./NavBar";
import Printer from "./Printer";

//img imports
import prusa from "./../images/Prusa-i3.png";
import maker from "./../images/makerBotReplicator.png";
import lullz from "./../images/lullzbot6.png";

function App() {
  return (
    <div className="appWrapper">
      <NavBar />
      <div className="mainHead">
        <h1 id="header1">Find the Printer</h1>
        <h1 id="header2">
          For <span>You</span>
        </h1>
      </div>
      <div className="body">
        <Printer img={prusa} name="Prusa" />
        <Printer img={maker} name="MakerBot" />
        <Printer img={lullz} name="LulzBot" />
      </div>
    </div>
  );
}

export default App;
