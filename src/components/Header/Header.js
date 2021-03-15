import React from "react";
import "./Header.css";
import Card from "./Logohead/Logohead";
import Nav from "./Nav/Nav";
const Header = () => {
  return (
    <div className="headercontainer">
      <div className="logohead1">
        <Card />
      </div>
      <Nav />
    </div>
  );
};

export default Header;
