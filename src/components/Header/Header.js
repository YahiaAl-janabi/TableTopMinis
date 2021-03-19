import React from "react";
import "./Header.css";
import Card from "./Logohead/Logohead";
import Nav from "./Nav/Nav";
import LogoSubtext from "../Header/LogoSubtext/LogoSubtext";

const Header = (props) => {
  return (
    <div className="headercontainer">
      <div className="logohead1">
        <Card />
      </div>
      <Nav />
      <LogoSubtext />
    </div>
  );
};

export default Header;
