import React, { useState, useEffect, useRef } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Browse from "./Browse";
import WhyPrint from "./WhyPrint";
import Brand from "./Brand";

import fakeServerObject from "./../fakeServer";

function App() {
  const [printers, setPrinters] = useState([]);
  const navBarRef = useRef();
  const mobileNav1 = useRef();
  const mobileNav2 = useRef();
  const mobileNav3 = useRef();
  useEffect(() => {
    setPrinters(fakeServerObject);
  }, []);

  const displayRoutes = () => {
    const routes = printers.map((brand, index) => {
      const lowerCaseRoute = brand.name.toLowerCase();
      return (
        <Route
          exact
          path={`/browse/${lowerCaseRoute}`}
          key={lowerCaseRoute + index}
        >
          <Brand name={brand.name} printers={brand.printers} />
        </Route>
      );
    });
    return routes;
  };

  const expandMobileNav = () => {
    const navBar = navBarRef.current;
    const navLine1 = mobileNav1.current;
    const navLine2 = mobileNav2.current;
    const navLine3 = mobileNav3.current;
    if(navBar.style.right !== "0%"){
      navBar.style.right = "0%";
      navLine1.style.transform = "translateY(10.5px) rotate(-45deg)";
      navLine1.style.backgroundColor = "#A51A41";
      navLine2.style.opacity = "0";
      navLine3.style.transform = "translateY(-10.5px) rotate(45deg)";
      navLine3.style.backgroundColor = "#A51A41";
    }else {
      navBar.style.right = "-110%";
      navLine1.style.transform = "";
      navLine1.style.backgroundColor = "white";
      navLine2.style.opacity = "1";
      navLine3.style.transform = "";
      navLine3.style.backgroundColor = "white";
    }
  }

  return (
    <div className="appWrapper">
      <div className="navBar">
        <p>Print Pick</p>
        {window.innerWidth < 1000 &&
          <div 
            className="mobileNav"
            onClick={expandMobileNav}
          >
            <div className="navLine" ref={mobileNav1}/>
            <div className="navLine" ref={mobileNav2}/>
            <div className="navLine" ref={mobileNav3}/>
          </div>
        }
        <ul ref={navBarRef}>
          {window.innerWidth < 1000 &&
            <p className="redPrintPick">Print Pick</p>
          }
          <li>
            <Link className="navLink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/search">
              Search
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/browse">
              Browse
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/whyprint">
              Why Print?
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <Home printers={printers} />
        </Route>
        <Route exact path="/search">
          <Search printers={printers} />
        </Route>
        <Route exact path="/browse">
          <Browse printers={printers} />
        </Route>
        <Route exact path="/whyprint" component={WhyPrint} />

        {displayRoutes()}
      </Switch>
    </div>
  );
}

export default App;
