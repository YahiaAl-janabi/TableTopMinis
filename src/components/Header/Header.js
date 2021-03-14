import React from "react";
import "./Header.css";
import Card from "./Logohead/Logohead";
const Header = () => {
  return (
    <div className="headercontainer">
      <div id="headercard">
        <a
          href={"https://www.tabletopminis.co.uk/"}
          target="_blank"
          rel="noreferrer"
        >
          <Card />
        </a>
      </div>
    </div>
  );
};

export default Header;
