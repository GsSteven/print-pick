import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Browse from "./Browse";
import WhyPrint from "./WhyPrint";
import Brand from "./Brand";

import fakeServerObject from "./../fakeServer";

//test images
import prusa1 from "./../images/Prusa/Prusa-i3.png";
import prusa2 from "./../images/Prusa/Prusa-Mini.png";

function App() {
  const [printers, setPrinters] = useState([]);
  const [routes, setRoutes] = useState([]);

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

  return (
    <div className="appWrapper">
      <div className="navBar">
        <p>Print Pick</p>
        <ul>
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
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/whyprint" component={WhyPrint} />

        {displayRoutes()}
      </Switch>
    </div>
  );
}

export default App;
