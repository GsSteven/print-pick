import React from "react";
import { Link } from "react-router-dom";

//img imports
import whyPrintHead from "./../images/whyPrint/WhyPrintHead.jpg";
import moon from "./../images/whyPrint/moonShells.jpg";
import rome from "./../images/whyPrint/rome.jpg";
import ball from "./../images/whyPrint/ball.jpg";
import hand from "./../images/whyPrint/hand.jpg";
import gear from "./../images/whyPrint/gear.jpg";
import engine from "./../images/whyPrint/engine.jpg";

export default function WhyPrint() {
  return (
    <div className="whyPrintWrapper">
      <div className="headContainer">
        <h1 className="whyPrintHead">Why Print?</h1>
        <img src={whyPrintHead} alt="" width="200" height="145" />
        <p>
          Imagine being able to physically hold anything you can think of. Being
          able to dream it and bring into reality. That is what 3D printing is
          all about. There are no boundries. There is no requirement to start
          learning about it. The community around it has so many people eager to
          help newcomers and share their knowledge. From the art world to
          engineering, 3D printing is for everyone.
        </p>
      </div>
      <h2>Art & Sculptures</h2>
      <div className="imageContainer">
        <img src={moon} width="600" height="500" alt="moon sculpture" />
        <img src={rome} width="600" height="500" alt="rome sculpture" />
        <img src={ball} width="600" height="500" alt="ball sculpture" />
      </div>
      <h2>Engineering & Prosthetics</h2>
      <div className="imageContainer">
        <img src={hand} width="600" height="500" alt="hand prosthetic" />
        <img src={gear} width="600" height="500" alt="gear print" />
        <img src={engine} width="600" height="500" alt="engine print" />
      </div>
      <div className="final">
        <p>
          It may all seem complicated and expensive from images alone but as
          each day passes 3D printing becomes cheaper and more user friendly.
          There is a printer for all skill levels and budgets. The possibilitys
          are endless with what you can bring into this world!{" "}
        </p>
        <br />
        <blockquote>
          <q>Patience is bitter, but its fruit is sweet</q>
          <p>-Aristotle</p>
        </blockquote>
        <br />
        <p>
          Printing is not always as glorious as it seems, especially in photos.
          It can be a very time consuming process. There will be prints that go
          wrong. Parts can break and problems can always be around the corner,
          but like everything learned it gets easier with each day and can be
          mastered by anyone. So if you’ve read this far what are you waiting
          for!
        </p>
      </div>
      <div className="buttonContainer">
        <button className="getStarted">
          <Link className="getStartedLink" to="/browse">
            Get Started
          </Link>
        </button>
      </div>
    </div>
  );
}
