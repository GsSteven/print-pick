import React, { useRef } from "react";

import closeButton from "./../images/closeButton.svg";

export default function ExpandedPrinter(props) {
  const cardRef = useRef();
  const closeButtonRef = useRef();
  const imgRef = useRef();
  const brandRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const buildAreaRef = useRef();
  const backgroundImgRef = useRef();

  const tiltCard = (e) => {
    //prevent 3d tilt on mobile
    if (window.innerWidth > 600) {
      const xAxis = (window.innerWidth / 2 - e.screenX) / 25;
      const yAxis = (window.innerHeight / 2 - e.screenY) / 25;
      const card = cardRef.current;
      card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
    }
  };

  const enterCard = (e) => {
    const card = cardRef.current;
    const closeButton = closeButtonRef.current;
    const img = imgRef.current;
    const imgBackground = backgroundImgRef.current;
    const brand = brandRef.current;
    const name = nameRef.current;
    const price = priceRef.current;
    const buildArea = buildAreaRef.current;
    //pop out effect
    closeButton.style.transform = "translateZ(20px)";
    img.style.transform = "translateZ(100px)";
    imgBackground.style.transform = "translateZ(50px) rotate(30deg)";
    if (props.brand) brand.style.transform = "translateZ(45px)";
    name.style.transform = "translateZ(25px)";
    price.style.transform = "translateZ(20px)";
    buildArea.style.transform = "translateZ(15px)";
    //turn off card transition delay when hovering in card
    card.style.transition = "none";
  };

  const exitCard = (e) => {
    const card = cardRef.current;
    const closeButton = closeButtonRef.current;
    const img = imgRef.current;
    const imgBackground = backgroundImgRef.current;
    const brand = brandRef.current;
    const name = nameRef.current;
    const price = priceRef.current;
    const buildArea = buildAreaRef.current;
    //reset elements
    closeButton.style.transform = "translateZ(0px)";
    imgBackground.style.transform = "translateZ(0px) rotate(0deg)";
    img.style.transform = "translateZ(0px)";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    if (props.brand) brand.style.transform = "translateZ(0px)";
    name.style.transform = "translateZ(0px)";
    price.style.transform = "translateZ(0px)";
    buildArea.style.transform = "translateZ(0px)";
    card.style.transition = "0.5s ease";
  };

  return (
    <div className="expandedPrintWrapper">
      <div
        className="dimentionBox"
        onMouseMove={tiltCard}
        onMouseEnter={enterCard}
        onMouseLeave={exitCard}
      >
        <div className="printerCard" ref={cardRef}>
          <button
            className="closeExpanded"
            onClick={() => props.close(false)}
            ref={closeButtonRef}
          >
            <img src={closeButton} alt="close" />
          </button>
          <div className="expandedPrinter">
            <div className="imgBackground" ref={backgroundImgRef} />
            <img src={props.img} alt={props.name} ref={imgRef} />
          </div>
          {props.brand && (
            <h1 className="expandedBrand" ref={brandRef}>
              {props.brand}
            </h1>
          )}
          <h2 className="expandedName" ref={nameRef}>
            {props.name}
          </h2>
          {props.price && (
            <h3 className="expandedPrice" ref={priceRef}>
              Price: <span className="innerPrice">${props.price}</span>
            </h3>
          )}
          <h4 className="expandedBuildArea" ref={buildAreaRef}>
            Build Area:{" "}
            {`${props.buildArea[0]} x ${props.buildArea[1]} x ${props.buildArea[2]}`}
          </h4>
          <a
            className="expandedLink"
            href={props.link}
            target="_blank"
            rel="noreferrer"
          >
            Original Site
          </a>
        </div>
      </div>
    </div>
  );
}
