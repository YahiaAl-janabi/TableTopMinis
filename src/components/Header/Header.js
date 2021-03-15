import React from "react";
import "./Header.css";
import Card from "./Logohead/Logohead";
import Nav from "./Nav/Nav";
import ImageViewer from "../ImageViewer/ImageViewer";
const Header = () => {
  return (
    <div className="headercontainer">
      <div className="logohead1">
        <Card />
      </div>
      <Nav />
      <div className="headimgviewer">
        <ImageViewer />
      </div>
    </div>
  );
};

export default Header;
