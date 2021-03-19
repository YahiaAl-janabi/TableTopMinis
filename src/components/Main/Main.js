import React from "react";
import "./Main.css";
import Slider from "../Main/ImageSlide/ImageSlide";

const Main = () => {
  return (
    <div className="maincontainer">
      <div className="headimgviewer">
        <Slider />
      </div>
    </div>
  );
};

export default Main;
