import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navdiv">
      <ul>
        <li>
          <a
            href={"https://www.tabletopminis.co.uk/"}
            target="_blank"
            rel="noreferrer"
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href={"https://www.tabletopminis.co.uk/"}
            target="_blank"
            rel="noreferrer"
          >
            SERVICES
          </a>
        </li>
        <li>
          <a
            href={"https://www.tabletopminis.co.uk/"}
            target="_blank"
            rel="noreferrer"
          >
            PREVIOUS WORK
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
