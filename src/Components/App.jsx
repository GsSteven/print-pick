import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Browse from "./Browse";
import WhyPrint from "./WhyPrint";
import Brand from "./Brand";

import fakeServerObject from "./../fakeServer";

function App() {
  const [printers, setPrinters] = useState([]);

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
