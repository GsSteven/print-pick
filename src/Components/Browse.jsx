import React from "react";

//img imports
import prusa from "./../images/Prusa/Prusa-i3.png";
import makerBot from "./../images/MakerBot/makerBotReplicator.png";
import creality from "./../images/Creality/ender3pro.png";
import lulzBot from "./../images/LulzBot/lulzBotWorkhorse.png";
import monoPrice from "./../images/MonoPrice/monoPriceMiniDeltaV2.png";
import triLab from "./../images/TriLab/triLab.png";
import qidi from "./../images/Qidi/xOne2.png";

export default function Browse() {
  return (
    <div className="browseWrapper">
      <div className="browseList">
        <div
          className="brand"
          onClick={() => (window.location.href = "./browse/prusa")}
        >
          <h2>Prusa</h2>
          <img src={prusa} alt="Prusa" />
        </div>
        <div
          className="brand"
          onClick={() => (window.location.href = "./browse/makerbot")}
        >
          <img src={makerBot} alt="MakerBot" />
          <h2>MakerBot</h2>
        </div>
        <div
          className="brand"
          onClick={() => (window.location.href = "./browse/creality")}
        >
          <h2>Creality</h2>
          <img src={creality} alt="Creality" />
        </div>
        <div
          className="brand"
          onClick={() => (window.location.href = "./browse/lulzbot")}
        >
          <img src={lulzBot} alt="LulzBot" />
          <h2>LulzBot</h2>
        </div>
        <div
          className="brand"
          onClick={() => (window.location.href = "./browse/monoprice")}
        >
          <h2>MonoPrice</h2>
          <img src={monoPrice} alt="MonoPrice" />
        </div>
        <div
          className="brand"
          onClick={() => (window.location.href = "./browse/trilab")}
        >
          <img src={triLab} alt="TriLab" />
          <h2>TriLab</h2>
        </div>
        <div
          className="brand"
          onClick={() => (window.location.href = "./browse/qidi")}
        >
          <h2>Qidi</h2>
          <img src={qidi} alt="Quidi" />
        </div>
      </div>
    </div>
  );
}
