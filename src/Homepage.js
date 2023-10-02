import React from "react";
import "./Homepage.css";
import Sidenav from "./navigation/Sidenav";
import TimeLine from "./timeline/TimeLine";
function Homepage() {
  return (
    <div className="HomePage">
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage__timeline"></div>
      <TimeLine />
    </div>
  );
}

export default Homepage;
