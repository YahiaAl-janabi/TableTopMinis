import React from "react";
import "./Main.css";
import Slider from "../Main/ImageSlide/ImageSlide";
import MainBoutPic from "../Main/MainAboutPic/MainAboutPic";
const Main = () => {
  return (
    <div className="maincontainer">
      <div className="headimgviewer">
        <Slider />
      </div>
      <MainBoutPic />
    </div>
  );
};

export default Main;
