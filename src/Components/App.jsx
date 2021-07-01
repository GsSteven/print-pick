import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Browse from "./Browse";
import WhyPrint from "./WhyPrint";
import Brand from "./Brand";

//test images
import prusa1 from "./../images/Prusa-i3.png";
import prusa2 from "./../images/Prusa-Mini.png";

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

        <Route exact path="/browse/prusa">
          <Brand
            name="Prusa"
            printers={[
              { name: "I3 MK3S+", img: prusa1 },
              { name: "Mini+", img: prusa2 },
            ]}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
