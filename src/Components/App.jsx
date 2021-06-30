import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Browse from "./Browse";
import WhyPrint from "./WhyPrint";

function App() {
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
      </Switch>
    </div>
  );
}

export default App;
