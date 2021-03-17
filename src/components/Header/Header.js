import React from "react";
import "./Header.css";
import Card from "./Logohead/Logohead";
import Nav from "./Nav/Nav";
import Slider from "../Slider/Slider";
const Header = () => {
  return (
    <div className="headercontainer">
      <div className="logohead1">
        <Card />
      </div>
      <Nav />
      <div className="headimgviewer">
        <Slider />
      </div>
    </div>
  );
};

export default Header;
